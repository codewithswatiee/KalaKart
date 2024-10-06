const express = require("express");
const dbConnect = require("./config/database");
const cors = require('cors');
const path = require('path');  // Import path module
require("dotenv").config();    // Load environment variables



// Import routes
const authRoutes = require("./routes/auth");
const artisanRoutes = require("./routes/artisans");

const app = express();

// CORS setup
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from frontend (set env var for production)
}));

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/seller", artisanRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));  // Serve static files from 'uploads' folder

// Default route
app.use("/", (req, res) => {
    res.send("Hello World");
});

// Global error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "An error occurred!", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App running successfully on port ${PORT}`);
});

// Connect to the database
dbConnect();
