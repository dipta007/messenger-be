import { Module } from '@nestjs/common';
import { AppGateway } from './ws-gateway';
import { RoomService } from './room.service';
import { RoomModule } from '../database/Room/room.module';
import { UserModule } from '../database/User/user.module';

@Module({
  imports: [RoomModule, UserModule],
controllers: [],
  providers: [AppGateway, RoomService]
})
export class WsGatewayModule {}
