const router = require('express').Router();

router.get("/products", require("./productsRoute.js"));
router.get('/products/:product_id', require("./productRoute.js"));
router.get("/products/:product_id/styles", require("./stylesRoute.js"));
router.get("/products/:product_id/related", require("./relatedRoute.js"));

module.exports = router;
