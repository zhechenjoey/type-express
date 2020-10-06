import { Controller, Req, Res, Get } from "routing-controllers";

@Controller()
export class UserController {
    @Get('/user')
    test() {
        // @ts-ignore
        console.log(asasas);
        // return 'This is UserController, thx';
    }
}