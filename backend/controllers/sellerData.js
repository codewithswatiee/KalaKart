// backend/api/sellerData.js
const express = require('express');
const router = express.Router();
const Seller = require('../models/artisanSchema'); // Assuming you have an artisan schema
const Order = require('../models/OrderSchema'); // Import the Order model
const Product = require('../models/ProductSchema'); // Import the Product model

// Fetch sales data
router.get('/sales-data', async (req, res) => {
  try {
    const salesData = await Seller.find().populate('products'); // Fetch sales data with product references
    res.json(salesData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('products.product'); // Fetch orders with product references
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch low stock items
router.get('/low-stock', async (req, res) => {
  try {
    const lowStockItems = await Product.find({ stock: { $lt: 5 } }); // Low stock query
    res.json(lowStockItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
