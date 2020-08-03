import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDbModule } from '../database/User/user.module';

@Module({
  imports: [UserDbModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
