require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRoute = require("./src/routes/login")
const signupRoute = require("./src/routes/signup");
const userRoute = require("./src/routes/user");
const cors = require("cors");
const createAdminAccount = require("./src/scripts/admin")

console.log("generate token secretKey : ", process.env.ACCESS_TOKEN_SECRET);
app.use(bodyParser.json())
app.use(cors())
createAdminAccount();
// connectDB();



app.use("/user", signupRoute);  // ✅ THIS IS KEY
app.use("/auth", loginRoute);
app.use("/api", userRoute);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});