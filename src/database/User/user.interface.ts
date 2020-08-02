import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: String,
  readonly username: String,
  readonly profilePic: String,
  readonly password: String
}