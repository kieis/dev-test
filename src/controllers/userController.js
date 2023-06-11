const { users, visits } = require("../database");

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

  // count visits
  visits[id] = visits[id] ? visits[id] + 1 : 1;

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

const updateUserById = (req, res, next) => {
  const { id } = req.query;
  const { name, job } = req.body;

  // search
  const userIndexConsult = users.findIndex((user) => user.id === Number(id));
  if (userIndexConsult < 0) {
    return res.status(404).send({
      message: "User not found",
    });
  }
  const userConsult = users[userIndexConsult];

  // set new user info
  const updatedUser = {
    ...userConsult,
    name: name ? name : userConsult.name,
    job: job ? job : userConsult.job,
  };

  // update list
  users[userIndexConsult] = updatedUser;

  res.status(200).send({
    data: updatedUser,
    message: "User updated successfully",
  });
};

const getUserVisitCountById = (req, res, next) => {
  const { id } = req.query;

  // search user
  const userConsult = users.find((user) => user.id === Number(id));
  if (!userConsult) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  //search visits
  const visitConsult = Object.entries(visits).find((visit) => visit[0] === id);
  if (!visitConsult) {
    return res.status(200).send({
      message: "User has no visits",
    });
  }

  res
    .status(200)
    .send(`Usuário ${userConsult.name} foi lido ${visitConsult[1]} vezes.`);
};

module.exports = {
  getUserById,
  getUsers,
  createUser,
  deleteUserById,
  updateUserById,
  getUserVisitCountById,
};
