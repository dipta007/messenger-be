import { Document } from 'mongoose';

export interface Message extends Document {
  readonly sender: String,
  readonly message: String,
  readonly roomId: String,
}