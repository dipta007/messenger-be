import { Module } from '@nestjs/common';
import { AppGateway } from './ws-gateway';
import { RoomService } from './room.service';
import { RoomDbModule } from '../database/Room/room.module';
import { UserDbModule } from '../database/User/user.module';
import { MessageDbModule } from '../database/Message/message.module';
import { MessageService } from './message.service';

@Module({
  imports: [RoomDbModule, UserDbModule, MessageDbModule],
  controllers: [],
  providers: [AppGateway, RoomService, MessageService]
})
export class WsGatewayModule {}
