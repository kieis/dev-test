const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require("../controllers/userController");
const router = express.Router();

router.get("/user", getUserById);
router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users", deleteUserById);
router.put("/users", updateUserById);
//router.get("/users/access", teste5);

module.exports = router;
