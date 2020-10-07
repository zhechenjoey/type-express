import { Redis } from 'ioredis';
import * as IORedis from 'ioredis';
import config from '../../config/default';

export class BaseService {
    private redis: Redis;
    constructor(){
        this.redis = new IORedis.default(config.redisOption);
    }
    public getRedis() {
        return this.redis;
    }
}