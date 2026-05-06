const jwt = require("jsonwebtoken")

function generateToken(user) {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })

}

module.exports = {
    generateToken
}
