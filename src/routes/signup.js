const express = require("express");
const router = express.Router();
const signupController = require('../controllers/signup');

router.get("/", (req, res) => {
    res.json({ message: "User GET route working" });
});

router.post('/register', signupController.createUser)

module.exports = router;