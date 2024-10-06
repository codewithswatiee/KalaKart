// backend/controllers/productController.js
const multer = require('multer');
const path = require('path');
const Product = require('../models/ProductSchema');

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Store images in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

// File filter to allow only images (jpeg, png)
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file format'), false);
    }
};

// Initialize multer
const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
    fileFilter
});

// Create product controller
const createProduct = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;
        const image = req.file ? req.file.path : null; // Store the image path if uploaded

        // Check for missing fields
        if (!image || !price || !name || !description || !stock) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Create and save new product
        const product = new Product({
            name,
            price,
            description,
            image: image.replace('uploads/', ''), // Store the relative image path
            stock
        });
        const newProduct = await product.save();

        // Return the created product as response
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to create product", error: error.message });
    }
};

// Export the controller and upload instance
module.exports = { upload, createProduct };
