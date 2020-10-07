import { Controller, Req, Res, Get } from "routing-controllers";
import { Inject } from 'typedi';
import { UserService } from '../services/user-service';


@Controller()
export class UserController {
    private readonly UserService: UserService = new UserService();

    @Get('/user')
    test() {
        return this.UserService.testRedis();
    }
}