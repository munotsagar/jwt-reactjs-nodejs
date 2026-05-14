const express = require("express");
const {loginController, refreshTokenController} = require("../controllers/login")

const router = express.Router();

router.post("/login", loginController)
router.post("/refresh-token", refreshTokenController)

module.exports = router
