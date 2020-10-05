import { Controller, Req, Res, Get } from "routing-controllers";

@Controller()
export class UserController {
    @Get('/user')
    test() {
        return 'This is UserController, thx';
    }
}