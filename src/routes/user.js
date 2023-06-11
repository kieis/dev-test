const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
  getUserVisitCountById,
} = require("../controllers/userController");
const { canDelete, canUpdate } = require("../middleware/hasPermission");
const router = express.Router();

router.get("/user", getUserById);
router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users", canDelete, deleteUserById);
router.put("/users", canUpdate, updateUserById);
router.get("/users/access", getUserVisitCountById);

module.exports = router;
