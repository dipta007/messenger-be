import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../database/models/user.schema';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async findUser(username) {
    const ret = await this.userModel.findOne({ username });
    return ret;
  }
}
