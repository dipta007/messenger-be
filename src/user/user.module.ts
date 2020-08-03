import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDbModule } from '../database/User/user.module';
import { UserController } from './user.controller';

@Module({
  imports: [UserDbModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
