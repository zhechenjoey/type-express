import { RoutingControllersOptions } from 'routing-controllers';

export const routeConfig: RoutingControllersOptions = {
    controllers: [process.cwd() + '/app/controllers/*.ts'],
}