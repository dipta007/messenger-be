import { Injectable } from '@nestjs/common';
import { Room } from '../database/models/room.schema';
import { User } from '../database/models/user.schema';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<Room>,
              @InjectModel(User.name) private userModel: Model<User>) {}

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
