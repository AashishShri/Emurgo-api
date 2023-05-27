import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { newsService } from './news.service';
import { newsDTO } from './interfaces/news.interface';

@ApiTags('news')
@Controller('news')
export class newsController {
  constructor(private readonly newsService: newsService) {}

  @ApiOperation({
    summary: 'Emurgo public news API for fetching articles',
    description: `Use this api to fetching N news articles `,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully Fetching news api details',
  })
  @Get('/news?')
  fetchNews(@Query() data: newsDTO) {
    console.log('contoller called for fetchNews', data);
    return this.newsService.fetchNews(data);
  }
}
