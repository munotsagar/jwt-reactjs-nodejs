const User = require("../models/user");

async function getUsers() {
    console.log("getUsers : ")
    const users = await User.find({});
    return users
}

module.exports = { getUsers }