const fs = require("fs");
const db = require('./client.js').client;

// data
const features = require('.data/features.csv');
const photos = require('.data/photos.csv');
const product = require('.data/product.csv');
const related = require('.data/related.csv');
const skus = require('.data/skus.csv');
const styles = require('.data/styles.csv');

// USE READ STREAM TO SEED COLLECTION
  // THIS SEED FUNCTION MAY TAKE 15-30 MINUTES TO COMPLETE DB SEEDING

// fs.createReadStream('./data/features.csv', { encoding: "utf-8" })
//   .on("data", (chunk) => {
//     console.log(chunk);
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

const featureModel = {
  id: null,
  product_id: null,
  feature: null,
  value: null
};

const photoModel = {
  id: null,
  styleId: null,
  url: null,
  thumbnail_url: null
};

const productModel = {
  id: null,
  name: null,,
  slogan: null,
  description: null,
  category: null,
  default_price: null
};

const relatedModel = {
  id: null,
  current_product_id: null,
  related_product_id: null
};

const skusModel = {
  id: null,
  styleId: null,
  size: null,
  quantity: null
};

const stylesModel = {
  id: null,
  productId: null,
  name: null,
  sale_price: null,
  original_price: null,
  default_style: null
};

console.log(db);

db.createCollection("productss", {
  "id": String,
  "campus": String,
  "name": String,
  "slogan": String,
  "description": String,
  "category": String,
  "default_price": String,
  "created_at": {
    default: new Date(),
  },
  "updated_at": {
    default: new Date(),
  },
  "features": [String],
  "results": [
    {
      "style_id": String,
      "name": String,
      "original_price": String,
      "sale_price": String,
      "default?": Boolean,
      "photos": [Object],
      "skus": Object
    }
  ]
});

// const collection = db.products;
// const insertResult = await collection.insertMany([]);
// console.log('Inserted documents =>', insertResult);