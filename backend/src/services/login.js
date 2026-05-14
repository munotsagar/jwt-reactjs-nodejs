const bcrypt = require("bcrypt");
const User = require("../models/user")
const { generateToken } = require("../utils/jwtUtils");
const { verifyToken } = require("../utils/authMiddleware");


async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            throw new Error("User not found")
        }
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error("Incorrect Password")
        }
        const token = generateToken(existingUser)
        return token;
    } catch (error) {
        console.log("Error : ", error.message)
        throw new Error("Invalid credentials...")
    }
}

async function refreshToken(token) {
    try {
        const decoded = verifyToken(token)
        if (!decoded) {
            throw new Error("Invalid token")
        }
        const user = await User.findById(decoded.id)
        if (!user) {
            throw new Error("User not found")
        }
        const newToken = generateToken(user)
        return newToken;
    }
    catch (error) {
        console.log("Error : ", error.message)
        throw new Error("Unable to refresh token")
    }
}



module.exports = {login, refreshToken};