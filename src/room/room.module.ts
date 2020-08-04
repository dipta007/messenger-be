import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
