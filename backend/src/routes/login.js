const express = require("express");
const loginController = require("../controllers/login")

const router = express.Router();

router.post("/login", loginController.login)
router.post("/refresh-token", loginController.refreshToken)

module.exports = router
