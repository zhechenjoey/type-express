import 'reflect-metadata';
import { useExpressServer, useContainer } from "routing-controllers";
import { routeConfig } from '../libs/route-config';
import { Container } from "typedi"

import express = require("express");
const app: express.Application = express();
useContainer(Container); // 支持外部 DI 容器注入服务到控制器、中间件和错误处理程序中
useExpressServer(app, routeConfig);
app.listen(3001, function () {
  console.log("server is on localhost:3001");
});
