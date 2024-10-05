const bcrypt = require("bcrypt");
const User = require("../models/buyerSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Signup route handler
exports.signup = async (req, res) => {
    try {
        // Get data from request body
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Secure the password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            console.error("Error in hashing password:", err);
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            });
        }

        // Create new user entry
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (err) {
        console.error("Error in signup:", err);
        res.status(500).json({
            success: false,
            message: "User can't be registered! Please try again later"
        });
    }
};

// Login route handler
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Data incomplete",
            });
        }

        // Find user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }

        // Create JWT token
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "2h",
        });

        // Clear sensitive information
        user = user.toObject();
        delete user.password; // Use delete to remove sensitive data

        // Set cookie options
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Cookie expires in 3 days
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
        };

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Logged in successfully!",
        });
    } catch (err) {
        console.error("Error in login:", err);
        res.status(500).json({
            success: false,
            message: "User can't be logged in! Please try again later"
        });
    }
};
