import { Service } from 'typedi';
import { BaseService } from '../base/base-service';

@Service()
export class UserService {
    testRedis() {
        // this.getRedis();
        return 'end';
    }
}