import { Injectable, Inject } from '@nestjs/common';
import { Room } from '../database/Room/room.interface';
import { Model } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(@Inject('ROOM_MODEL') private roomModel: Model<Room>) { }

  async getConversations(userId: string, offset: number) {
    const ret = await this.roomModel.find({ users: userId }).limit(10).sort('-createdOn').skip(offset);
    console.log("rr", ret)
    return ret;
  }
}
