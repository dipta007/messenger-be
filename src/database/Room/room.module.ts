import { Module } from '@nestjs/common';
import { roomProviders } from './room.provider';
import { DatabaseModule } from '../database.module';
import { Room } from './room.interface';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    ...roomProviders,
  ],
  exports: [
    ...roomProviders,
  ],
})
export class RoomDbModule {}