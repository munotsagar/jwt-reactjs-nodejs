const User = require("../models/user");
const bcrypt = require("bcrypt");


async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({ "email": "admin@test.com" });
        if (!existingAdmin) {
            const newAdmin = new User({
                name: "Admin",
                email: "admin@test.com",
                password: await bcrypt.hash("admin", 10),
                role: "admin"
            })
            await newAdmin.save();
            console.log("Admin account created successfully...")
        } else {
            console.log("Admin already exists..")
        }
    } catch (error) { console.error(error.message); }
}

module.exports = createAdminAccount;