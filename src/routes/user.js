const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
} = require("../controllers/userController");
const router = express.Router();

router.get("/user", getUserById);
router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users", deleteUserById);
//router.put("/users", teste4);
//router.get("/users/access", teste5);

module.exports = router;
