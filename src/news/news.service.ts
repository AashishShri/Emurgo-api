import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { newsDTO } from './interfaces/news.interface';
import { constant } from '../constant';
import { AppService } from '../app.service';

@Injectable()
export class newsService {
  constructor(
    private httpService: HttpService,
    private redisService: AppService,
  ) {}

  /**
   * @author  Aashish Shrivastava
   * @description fetchNews funtion fetch the data from public news api
   * @modifiedOn - SAt 27h May 2023 - 04:58  PM
   * @returns return news data
   */
  async fetchNews(reqBody: newsDTO): Promise<any> {
    console.log('Emurgo service 1.0 | Processing...', reqBody);

    //
    const redisConnectionInfo = {
      host: constant.REDIS_HOST,
      port: constant.REDIS_PORT,
    };
    const redKey = `${constant.REDIS_PREFIX}_${reqBody?.limit}`;

    const redisRes = await this.redisService.getCacheData(
      redisConnectionInfo,
      redKey,
    );

    if (!redisRes) {
      const apikey = constant.API_KEY;
      const limt = reqBody?.limit ? parseInt(reqBody?.limit) : 10;

      const reqUrl = `${constant.BASE_URL}/search?q=example&lang=en&country=us&max=${limt}&apikey=${apikey}`;

      const apiData = await lastValueFrom(
        this.httpService.get(reqUrl, {}).pipe(
          map((response) => {
            return response?.data;
          }),
        ),
      );

      await this.redisService.setCacheData(
        redisConnectionInfo,
        redKey,
        JSON.stringify(apiData),
        3600,
      );

      console.log('data sending from real api call');

      return apiData;
    } else {
      console.log('data sending from redis call');
      return redisRes;
    }
  }
}
