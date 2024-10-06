const express = require("express");
const router = express.Router();

const {upload, createProduct} = require("../controllers/productControllers");

router.post('/products', upload.single('image'), createProduct);

module.exports = router;