require('dotenv').config({ quiet: true });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRoute = require("./src/routes/login")
const signupRoute = require("./src/routes/signup");
const userRoute = require("./src/routes/user");
const cors = require("cors");
const createAdminAccount = require("./src/scripts/admin")

const corsOptions = {
    origin: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(bodyParser.json())
app.use(cors(corsOptions))
createAdminAccount();
// connectDB();



app.use("/user", signupRoute);  // ✅ THIS IS KEY
app.use("/auth", loginRoute);
app.use("/api", userRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
