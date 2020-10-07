import 'reflect-metadata';
import { useExpressServer } from "routing-controllers";
import { routeConfig } from '../libs/route-config';

import express = require("express");
const app: express.Application = express();
// console.log(app);
useExpressServer(app, routeConfig);
app.listen(3001, function () {
  console.log("server is on localhost:3001");
});
