import { Module } from '@nestjs/common';
import { AppGateway } from './ws-gateway';
import { RoomService } from './room.service';
import { MessageService } from './message.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [AppGateway, RoomService, MessageService]
})
export class WsGatewayModule {}
