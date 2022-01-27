const models = require("../models");

const getAllMessages = async (req, res) => {
  const messages = await models.Messages.findAll({});
  if (!messages) {
    return res.status(404).send({
      status: false,
      message: "No Record Found",
      Messages: messages,
    });
  }

  return res.status(200).send({
    status: true,
    message: messages,
  });
};

const getConversation = async (req, res) => {
  const senderID = parseInt(req.query.senderID);
  const receiverID = parseInt(req.query.receiverID);
  let newMsgs = [];
  const messages = await models.Messages.findAll({});
  if (!messages) {
    return res.status(404).send({
      status: false,
      message: "No Record Found",
      Messages: messages,
    });
  } else {
    newMsgs = messages.filter(
      (el) => el.senderID === senderID && el.recieverID === receiverID
    );
    return res.status(200).send(newMsgs);
  }
};

const sendMessage = (params) => {
  const { message, senderID, receiverID, status } = params;
  const addMessages = models.Messages.create({
    message,
    senderID,
    receiverID,
    status,
  });
  if (!addMessages) {
    return false;
  }
  return true;
};

const updateMessage = (message, senderID) => {};

const deleteMessage = (message, senderID) => {};

module.exports = {
  getAllMessages,
  sendMessage,
  updateMessage,
  deleteMessage,
  getConversation,
};
