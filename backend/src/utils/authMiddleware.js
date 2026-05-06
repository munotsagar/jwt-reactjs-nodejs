const jwt = require('jsonwebtoken');
const secretKey = require("../configuration/jwtConfig");

// function authonticateToken(req, res, next) {
//     const authHeader = req.header("Authorization");

//     console.log("authHeader : ", authHeader)

//     if (!authHeader) {
//         return res.status(401).json({ message: "Unauthorized: missing token" })
//     }

//     const [bearer, token] = authHeader.split(" ");
//     if (bearer !== "Bearer" || !token) {
//         return res.status(401).json({ message: "Unauthorized: Invalid token format " })
//     }
//     console.log("generate token secretKey : ", secretKey);
//     console.log("Token : ", token)
//     const verified = jwt.verify(token, secretKey);
//     if (verified) {
//         // return res.send("Successfully Verified");
//         req.user = user;
//         next();
//     } else {
//         return res.status(403).json({ message: 'Forbidden: Invalid Token' })
//     }
// }

const authonticateToken = (req, res, next) => {
    console.log("authMiddleware : ", process.env.ACCESS_TOKEN_SECRET)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        console.log(user)
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    });
};

module.exports = {
    authonticateToken
}