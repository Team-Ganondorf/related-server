const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'attelier-product-db';

module.exports = {
  getProductById: async (req, res) => {
    const id = +req.params.product_id;
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let data = await client.db(source).collection('products').findOne({ id: id });
      res.send(data);
    } finally {
      await client.close();
    }
  }
};
