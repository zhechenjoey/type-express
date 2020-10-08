import { Controller, Req, Res, Get } from "routing-controllers";
import { Inject } from 'typedi';
import { BaseController } from '../base/base-controller';
import { UserService } from '../services/user-service';


@Controller()
export class UserController extends BaseController {
    @Inject()
    private UserService: UserService;

    @Get('/user')
    async test() {
        const data = await this.UserService.testRedis();
        console.log(this.success(data));
        if(data) return this.success(data);
    }
}