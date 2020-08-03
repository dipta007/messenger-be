import { Module } from '@nestjs/common';
import { messageProviders } from './message.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    ...messageProviders,
  ],
  exports: [
    ...messageProviders,
  ],
})
export class MessageDbModule {}