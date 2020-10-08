import { Service } from 'typedi';
import { BaseService } from '../base/base-service';

@Service()
export class UserService extends BaseService {
    testRedis() {
        this.getRedis().set('cz','fjkahf');
        return this.getRedis().get('cz');
    }
}