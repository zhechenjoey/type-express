import { Redis } from 'ioredis';
import * as IORedis from 'ioredis';
import config from '../../config/default';

export class BaseService {
    private redis: Redis;
    constructor(){
        this.redis = new IORedis.default(config.redisOption);
        console.log('start redis successfully');
    }
    public getRedis() {
        return this.redis;
    }
}