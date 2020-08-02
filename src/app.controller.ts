import { Controller, Get, Post, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Model } from 'mongoose';
import { Cat } from './database/Cat/cat.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
