const jwt = require("jsonwebtoken");
const User = require("../models/buyerSchema"); // Adjust the path according to your project structure

const authMiddleware = async (req, res, next) => {
    // Get token from headers
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No token provided, authorization denied."
        });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find user by ID
        const user = await User.findById(decoded.id);
        if (!user || user.token !== token) {
            return res.status(401).json({
                success: false,
                message: "Token is not valid or does not match the stored token."
            });
        }

        // Attach user to the request
        req.user = user;
        next();
    } catch (err) {
        console.error("Authorization error:", err);
        res.status(401).json({
            success: false,
            message: "Token is not valid."
        });
    }
};

module.exports = authMiddleware;
