const models = require("../models/index");

const createUser = (req, res) => {
  const create = models.create({
    name: req.body.name,
    socket_id: req.body.socket_id,
    status: req.body.status,
  });
  if (create) {
    res.status(201).send("User created!");
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

const updateUser = () => {};

const findUser = async (req, res) => {
  console.log(req.query.username);
  const user = await models.Users.findOne({
    where: { name: req.query.username },
  });
  if (!user) {
    return res.status(404).send(user);
  }

  return res.status(200).send(user);
};

module.exports = { createUser, getAllUsers, updateUser, findUser };
