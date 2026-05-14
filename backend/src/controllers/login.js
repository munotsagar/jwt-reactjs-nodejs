const {login, refreshToken} = require("../services/login");


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

async function refreshTokenController(req, res) {
    try {
        const { token } = req.body;
        const newToken = await refreshToken(token);
        res.json({ token: newToken })
    }
    catch (error) {
        console.error("Error : ", error.message)
        res.status(401).json({ message: "Unable to refresh token" })
    }
}


module.exports = {loginController, refreshTokenController};