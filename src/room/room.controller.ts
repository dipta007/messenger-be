import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { RoomService } from './room.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('conversations')
export class RoomController {
  constructor(private roomService: RoomService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  async getConversations(@Request() req) {
    console.log(req.user)
    const { userId, username } = req.user;
    return await this.roomService.getConversations(userId, 0);
  }
}
