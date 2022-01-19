const models = require("../models");
const { Op } = require("sequelize");

const createUsers = (req, res) => {
  const create = models.create({
    name: req.body.name,
    socket_id: req.body.socket_id,
    status: req.body.status,
  });
  if (create) {
    res.status(201).send(todo);
  } else {
    res.status(400).send(error);
  }
};

const getAllUsers = async (req, res) => {
  const Users = await models.Users.findAll({});
  if (!Users) {
    return res.status(404).send({
      status: false,
      message: "No Record Found",
      Users: Users,
    });
  }

  return res.status(200).send({
    status: true,
    message: "Users found",
    users: Users,
  });
};

module.exports = { createUsers, getAllUsers };
