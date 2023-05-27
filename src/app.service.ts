import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { createClient } from 'redis';


import { promisify } from 'util';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Emurgo from Aashish!';
  }

  async getRedisInstance(connectionIdentifier: {
    host: string;
    port: string | number;
    password?: string;
    instance?: string;
    database?: number;
    timeout?: number;
  }) {
    const client = createClient(
      connectionIdentifier.port,
      connectionIdentifier.host,
    );
    client.on('error', (err: any) => console.log('Redis Client', err));
    client.get = promisify(client.get);
    client.set = promisify(client.set);

    client.expire = promisify(client.expire);

    return client;
  }

  async getCacheData(
    connectionIdentifier: { host: string; port: string },
    key: string,
  ) {
    const redisInstance = await this.getRedisInstance({
      host: connectionIdentifier.host,
      port: connectionIdentifier.port,
    });

    const dataSet = await redisInstance.get(key);
    await redisInstance.quit();
    return dataSet;
  }

  async setCacheData(
    connectionIdentifier: { host: string; port: string },
    key: string,
    data: any,
    expiry: number,
  ) {
    const redisInstance = await this.getRedisInstance({
      host: connectionIdentifier.host,
      port: connectionIdentifier.port,
    });

    const dataSet = await redisInstance.set(key, data);
    if (expiry != 0) {
      await redisInstance.expire(key, expiry);
    }
    await redisInstance.quit();
    return dataSet;
  }
}
