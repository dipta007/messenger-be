import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../database/User/user.interface';


@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) { }

  async findUser(username) {
    return this.userModel.findOne({ username });
  }
}
