import * as mongoose from 'mongoose';

export const RoomSchema = new mongoose.Schema({
  users: [String],
  name: String,
  emoji: String
});