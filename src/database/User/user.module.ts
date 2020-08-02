import { Module } from '@nestjs/common';
import { userProviders } from './user.provider';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    ...userProviders,
  ],
  exports: [
    ...userProviders,
  ],
})
export class UserModule {}