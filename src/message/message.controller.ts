import { Controller, Get, Param, Inject } from '@nestjs/common';
import { Message } from '../database/Message/message.interface';
import { Model } from 'mongoose';

@Controller('message')
export class MessageController {
  constructor(@Inject('MESSAGE_MODEL') private messageModel: Model<Message>) { }

  @Get('/all/:roomId')
  async getAllMessages(@Param('roomId') roomId) {
    return await this.messageModel.find({ roomId });
  }
}
