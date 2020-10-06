/**
 * 全局错误处理
 */

import { Middleware, ExpressErrorMiddlewareInterface } from "routing-controllers";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: () => any) {
        response.status(500).json({
            ret: -1,
            msg: 'service error',
        })
    }
}