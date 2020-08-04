import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './Room/room.schema';
import { Message, MessageSchema } from './Message/message.schema';
import { User, UserSchema } from './User/user.schema';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        console.log('db', configService.get<string>('MONGODB_URI'))
        return ({
          uri: configService.get<string>('MONGODB_URI'),
        });
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema },
      { name: Message.name, schema: MessageSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  exports: [MongooseModule]
})
export class DatabaseModule {}
