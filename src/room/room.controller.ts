import { Controller, Get, Param, UseGuards, Request, Post, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('conversations')
export class RoomController {
  constructor(private roomService: RoomService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/list')
  async getConversations(@Request() req) {
    const { userId, username } = req.user;
    return await this.roomService.getConversations(userId, 0);
  }

  @UseGuards(JwtAuthGuard)
  @Post('open')
  async openConversation(@Body() body, @Request() req) {
    const { name, username } = body;
    return await this.roomService.openConversation(req.user.userId, [username], name);
  }

  @UseGuards(JwtAuthGuard)
  @Get('get/:id')
  async getConversation(@Param('id') roomId) {
    return await this.roomService.getRoom(roomId);
  }
}
