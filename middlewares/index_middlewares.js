const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRoutes = require("../routes/index_route");
require("../config/index_config");

module.exports = app => {
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  indexRoutes(app);
};
