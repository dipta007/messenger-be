import { Injectable, Inject } from '@nestjs/common';
import { Room } from '../database/Room/room.interface';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';

@Injectable()
export class RoomService {
  constructor(@Inject('ROOM_MODEL') private roomModel: Model<Room>,
              private userService: UserService) { }

  async getConversations(userId: string, offset: number) {
    const ret = await this.roomModel.find({ users: userId }).limit(100).sort('-createdOn').skip(offset);
    return ret;
  }

  async openConversation(owner: string, members: [string], name: string) {
    const promises = members.map(ele => this.userService.findUser(ele));
    const users = await Promise.all(promises);
    const usersId = users.map(u => u._id);
    const newRoom = await this.roomModel.create({ name, users: [owner, ...usersId]});
    const ret = await newRoom.save();
    return ret;
  }

  async getRoom(roomId: string) {
    return await this.roomModel.findOne({ _id: roomId })
  }
}
