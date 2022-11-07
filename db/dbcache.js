const { run } = require('./client.js');

let productsCache;

const loadCache = async () => {
  const db = await run();
  productsCache = await db.collection('products').find({}).toArray();
  return productsCache;
};

loadCache();

module.exports = { loadCache };