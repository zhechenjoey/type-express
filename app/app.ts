import express = require("express");
const app: express.Application = express();
app.get("/", function (req, res) {
  res.send("Hello Woasdsdassasrld!");
});
app.listen(3000, function () {
  console.log("server is on localhost:3000");
});
