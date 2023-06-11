const express = require("express");
const {
  getUser,
  getUsers,
  createUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/user", getUser);
router.get("/users", getUsers);
router.post("/users", createUser);
//router.delete("/users", teste3);
//router.put("/users", teste4);
//router.get("/users/access", teste5);

module.exports = router;
