const express = require("express");
const app = express();
const indexMiddleWare = require("./middlewares/index_middlewares");
indexMiddleWare(app);
exports.app = app;

// lISTENIGNG SERVER

app.listen(3000);