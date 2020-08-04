import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { User } from '../database/models/user.schema';
import * as bcrypt from 'bcrypt';
import { bcryptConstants } from 'src/constants';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async validateUser(username: string, pass: string) {
    let user = await this.usersService.findUser(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      return { username: user.username, _id: user._id, name: user.name };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
      userId: user._id,
    };
  }

  async isUserExist(username) {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  async signup(user: any) {
    if (await this.isUserExist(user.username)) {
      throw new BadRequestException('Email is already in use');
    }
    const hashedPassword = bcrypt.hashSync(
      user.password,
      bcryptConstants.saltRounds,
    );
    delete user.password;
    const createdUser = await this.userModel.create({
      ...user,
      password: hashedPassword,
    });
    return await createdUser.save();
  }
}
