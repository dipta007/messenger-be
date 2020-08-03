import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageDbModule } from '../database/Message/message.module';

@Module({
  imports: [MessageDbModule],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule {}
