import { Injectable } from '@nestjs/common';
import { User } from '../database/User/user.schema';
import { Model } from 'mongoose';
import { Message } from '../database/Message/message.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>,
              @InjectModel(User.name) private userModel: Model<User>) {}

  async addMessage(userId: string, roomId: string, msg: string) {
    return await (await this.messageModel.create({ sender: userId, message: msg, roomId })).save();
  }
}
