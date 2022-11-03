const router = require('express').Router();

router.use("/products", require("./productsRoute.js"));
router.use('/product/:product_id', require("./productRoute.js"));
router.use("/products/:product_id/styles", require("./stylesRoute.js"));
router.use(" /products/:product_id/related", require("./relatedRoute.js"));

module.exports = router;
