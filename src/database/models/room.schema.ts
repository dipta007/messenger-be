import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document {
  @Prop()
  users: [string];

  @Prop()
  name: string;

  @Prop()
  emoji: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
