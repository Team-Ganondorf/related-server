const router = require("express").Router();
const productsController = require("../controllers/productsController.js");

router.route("/products").get(productsController.getAllProducts);

module.exports = router;
