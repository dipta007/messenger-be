import { Injectable, Inject } from '@nestjs/common';
import { Room } from '../database/Room/room.interface';
import { User } from '../database/User/user.interface';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class RoomService {
  constructor(@Inject('ROOM_MODEL') private roomModel: Model<Room>,
              @Inject('USER_MODEL') private userModel: Model<User>) {}

  async addUserToRoom(roomId: string, userId: string) {
    const existingRoom = isValidObjectId(roomId) && await this.roomModel.findById(roomId)
    const user = await this.userModel.findById(userId);
    
    let users = [];
    users = existingRoom.users
    users = [...users, user._id];
    users = [...new Set(users)]

    await existingRoom.updateOne({ users });
    return existingRoom._id;
  }

  async getRoom(roomId: string) {
    return await this.roomModel.findOne({ _id: roomId })
  }
}
