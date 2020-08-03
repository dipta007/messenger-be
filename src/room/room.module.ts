import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { RoomDbModule } from 'src/database/Room/room.module';

@Module({
  imports: [RoomDbModule],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}
