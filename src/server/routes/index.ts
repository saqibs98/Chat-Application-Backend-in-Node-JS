const userController = require("../controllers");

module.exports = (app:any) => {
  app.get("/users", userController.getAllUsers);
  app.post("/login", userController.findUser);
  app.get("/messages", userController.getAllMessages);
  app.get("/messages/conversation", userController.getConversation);
};
