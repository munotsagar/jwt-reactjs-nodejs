// const mongoose = require('mongoose'); // Use require if not using ES modules

const mongoose = require("../configuration/dbConfig");

// const { Schema, model } = mongoose;


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        role: { type: String, enum: ["admin", "customer"], default: "customer" }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);


// const userSchema = new Schema({
//     name: String,
//     email: String,
//     password: String,
//     role: { type: String, enum: ["admin", "customer"], default: "customer" }
// });

// module.exports = mongoose.model("User", userSchema);