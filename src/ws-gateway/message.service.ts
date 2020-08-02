import { Injectable, Inject } from '@nestjs/common';
import { Room } from '../database/Room/room.interface';
import { User } from '../database/User/user.interface';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class MessageService {
  constructor(@Inject('MESSAGE_MODEL') private messageModel: Model<Room>,
              @Inject('USER_MODEL') private userModel: Model<User>) {}

  async addMessage(username: string, roomId: string, msg: string) {
    const user = await this.userModel.findOne({ username });
    return await (await this.messageModel.create({ sender: user._id, message: msg, roomId })).save();
  }
}
