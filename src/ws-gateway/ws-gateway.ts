import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { RoomService } from './room.service';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private roomService: RoomService) {}

  @SubscribeMessage('JoinRoom')
  async joinRoom(client: Socket, payload) {
    console.log('room', payload)
    const { room, id} = payload;
    const roomId = await this.roomService.addUserToRoom(room, id);
    client.join(roomId)
    return roomId;
  }

  @SubscribeMessage('Message')
  handleMsgServer(client: Socket, payload): void {
    console.log('payload', payload)
    client.broadcast.to(payload.room).emit('Message', payload)
  }

  afterInit(server: Server) {
    console.log('init')
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }
}
