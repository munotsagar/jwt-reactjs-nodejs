const express = require("express");
const cors = require("cors");
const loginController = require("../controllers/login")

const router = express.Router();

router.use(cors())

router.post("/login", loginController)

module.exports = router