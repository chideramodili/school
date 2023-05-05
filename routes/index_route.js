const formRoute = require("../routes/form_route");
module.exports = routes => {
  // MIDDLEWEARS

  routes.use("/form", formRoute);
};
