const router = require("express").Router();
const stylesController = require("../controllers/stylesController.js");

router.route("/products/:product_id/styles").get(stylesController.getStylesById);

module.exports = router;
