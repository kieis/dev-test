const { users } = require("../database");

const getUserById = (req, res, next) => {
  // id instead of name
  const { id } = req.query;
  // search
  const userConsult = users.find((user) => user.id === Number(id));
  if (!userConsult) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  return res.status(200).send({
    data: userConsult,
    message: "User found successfully",
  });
};

const getUsers = (req, res, next) => {
  return res.status(200).send({
    data: users,
    message: "Users found successfully",
  });
};

const createUser = (req, res, next) => {
  const { name, job } = req.body;

  // unnecessary with real db
  const lastUserAdded = users[users.length - 1];
  const newUser = {
    id: lastUserAdded.id + 1,
    name,
    job,
  };

  users.push(newUser);
  res.status(200).send({
    data: newUser,
    message: "User created successfully",
  });
};

const deleteUserById = (req, res, next) => {
  // id instead of name
  const { id } = req.query;

  // search by index
  const userIndexConsult = users.findIndex((user) => user.id === Number(id));
  if (userIndexConsult < 0) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  // remove user from list, used splice because 'users' are constant
  const deletedUser = users.splice(userIndexConsult, 1);

  res.status(200).send({
    data: deletedUser[0],
    message: "User deleted successfully",
  });
};

module.exports = {
  getUserById,
  getUsers,
  createUser,
  deleteUserById,
};
