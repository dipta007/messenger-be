import { Module } from '@nestjs/common';
import { AppGateway } from './ws-gateway';
import { RoomService } from './room.service';
import { RoomModule } from '../database/Room/room.module';
import { UserModule } from '../database/User/user.module';
import { MessageModule } from '../database/Message/message.module';
import { MessageService } from './message.service';

@Module({
  imports: [RoomModule, UserModule, MessageModule],
  controllers: [],
  providers: [AppGateway, RoomService, MessageService]
})
export class WsGatewayModule {}
