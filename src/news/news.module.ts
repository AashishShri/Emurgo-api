import { Module } from '@nestjs/common';

import { newsController } from './news.controller';
import { newsService } from './news.service';
import { HttpModule } from '@nestjs/axios';
import { AppService } from '../app.service';

@Module({
  imports: [HttpModule],
  controllers: [newsController],
  providers: [newsService, AppService],
})
export class newsModule {}
