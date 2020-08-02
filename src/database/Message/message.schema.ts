import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  roomId: String,
});