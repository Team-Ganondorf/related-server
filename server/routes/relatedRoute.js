const router = require("express").Router();
const relatedController = require("../controllers/relatedController.js");

router.route("/products/:product_id/related").get(relatedController.getRelated);

module.exports = router;
