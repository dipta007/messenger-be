import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  profilePic: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
