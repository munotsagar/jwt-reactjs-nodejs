const login = require("../services/login");


async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const token = await login(email, password);
        res.json({ token: token })
    } catch (error) {
        console.error("Error : ", error.message)
        res.status(401).json({ message: "Invalid credentials" })
    }
}


module.exports = loginController