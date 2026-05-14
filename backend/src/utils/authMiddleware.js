const jwt = require('jsonwebtoken');

const authonticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

    if (!token) return res.status(401).json({ message: "Missing authorization token" }); // Unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token" }); // Forbidden
        req.user = user;
        next();
    });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return decoded;
    }
    catch (err) {
        return null;
    }
    
}

module.exports = {
    authonticateToken,
    verifyToken
}
