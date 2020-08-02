import { Document } from 'mongoose';

export interface User extends Document {
  readonly sender: String,
  readonly message: String,
  readonly roomId: String,
}