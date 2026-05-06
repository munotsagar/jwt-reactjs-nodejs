const jwt = require("jsonwebtoken")

const { secretKey } = require("../configuration/jwtConfig")
require('dotenv').config();
function generateToken(user) {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
    console.log("payload: ", payload)
    console.log("generate token secretKey : ", process.env.ACCESS_TOKEN_SECRET);

    // return jwt.sign(payload, secretKey, { expiresIn: "1h" })
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })

}

module.exports = {
    generateToken
}