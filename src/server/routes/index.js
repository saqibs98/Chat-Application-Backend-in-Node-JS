const userController = require("../controllers");

module.exports = (app) => {
  app.get("/users", userController.getAllUsers);
};
