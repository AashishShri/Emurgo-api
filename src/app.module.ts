import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { newsModule } from './news/news.module';

@Module({
  imports: [newsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
