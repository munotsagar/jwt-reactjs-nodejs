const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createUser(userData) {
    console.log(userData)
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed Password:", hashedPassword);
    // await User.init();
    const createdUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role: "customer"
    })

    // const savedUser = await createdUser.save();
    return createdUser;
}

module.exports = createUser