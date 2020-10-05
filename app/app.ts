import 'reflect-metadata';
import { useExpressServer } from "routing-controllers";
import { routeConfig } from './libs/route';

import express = require("express");
const app: express.Application = express();
useExpressServer(app, routeConfig);
app.listen(3000, function () {
  console.log("server is on localhost:3000");
});
