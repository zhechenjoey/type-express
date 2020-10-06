import { RoutingControllersOptions } from 'routing-controllers';

export const routeConfig: RoutingControllersOptions = {
    controllers: [process.cwd() + '/app/controllers/*.ts'],
    middlewares: [process.cwd() + '/libs/middleware/*.ts'],
    defaultErrorHandler: false,
}