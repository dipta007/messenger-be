import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../database/User/user.interface';
import * as bcrypt from 'bcrypt';
import { bcryptConstants } from 'src/constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @Inject('USER_MODEL') private userModel: Model<User>
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async isUserExist(username) {
    const user = await this.userModel.findOne({ username });
    console.log(user)
    return user;
  }

  async signup(user: any) {
    if (await this.isUserExist(user.username)) {
      throw new BadRequestException('Email is already in use')
    }
    const hashedPassword = bcrypt.hashSync(user.password, bcryptConstants.saltRounds);
    delete user.password
    const createdUser = await this.userModel.create({ ...user, password: hashedPassword });
    return await createdUser.save();
  }
}
