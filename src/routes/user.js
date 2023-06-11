const express = require("express");
const { getUser, getUsers } = require("../controllers/userController");
const router = express.Router();

router.get("/user", getUser);
router.get("/users", getUsers);
//router.post("/users", teste2);
//router.delete("/users", teste3);
//router.put("/users", teste4);
//router.get("/users/access", teste5);

module.exports = router;
