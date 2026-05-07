const express = require("express");
const userController = require("../controllers/user");
const authMiddleware = require("../utils/authMiddleware");


const router = express.Router();

router.get("/users", authMiddleware.authonticateToken, userController.getUsers);

module.exports = router;
