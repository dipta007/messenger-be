import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../database/User/user.interface';


@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) { }

  async findUser(username) {
    const ret = await this.userModel.findOne({ username });
    return ret;
  }
}
