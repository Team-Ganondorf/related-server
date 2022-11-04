const router = require("express").Router();
const productController = require("../controllers/productController.js");

router.route("/products/:product_id/").get(productController.getProductById);

module.exports = router;
