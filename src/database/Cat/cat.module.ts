import { Module } from '@nestjs/common';
import { catsProviders } from './cats.provider';
import { DatabaseModule } from '../database.module';
import { Cat } from './cat.interface';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    ...catsProviders,
  ],
  exports: [
    ...catsProviders,
  ],
})
export class CatModule {}