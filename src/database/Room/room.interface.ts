import { Document } from 'mongoose';

export interface Room extends Document {
  readonly users: [String],
  readonly name: String,
  readonly emoji: String
}