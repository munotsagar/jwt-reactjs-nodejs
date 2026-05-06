const userService = require("../services/signup");

async function createUser(req, res) {
    try {
        const userData = req.body;
        console.log(req.body)
        const user = await userService(userData);
        // const user = "User Data";
        res.status(201).json({
            user: user,
            message: "User created successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

module.exports = { createUser }