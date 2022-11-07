const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'attelier-product-db';

module.exports = {
  getAllProducts: async (req, res) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let products = await client.db(source).collection('products').find({}).lean().toArray();

      res.send(products);
    } finally {
      await client.close();
    }
  }
};
