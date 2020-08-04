import { Controller, Get, Param } from '@nestjs/common';
import { Message } from '../database/Message/message.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('message')
export class MessageController {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) { }

  @Get('/all/:roomId')
  async getAllMessages(@Param('roomId') roomId) {
    return await this.messageModel.find({ roomId });
  }
}
