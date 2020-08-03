import { Controller, Get, Param, UseGuards, Request, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/getbyusername')
  async getConversations(@Query() query) {
    const { email } = query;
    return await this.userService.findUser(email);
  }
}
