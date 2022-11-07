const db = require('../../db/client.js');
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
