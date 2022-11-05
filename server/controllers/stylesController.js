const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/';
const source = process.env.DATABASE || 'attelier-product-db';

module.exports = {
  getStylesById: async (req, res) => {
    const id = +req.params.product_id;
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
      let data = await client.db(source).collection('products').find({ id: id }).toArray();
      if (data[0] && data[0].results) {
        let styles = data[0].results;
        let result = {
          "product_id": id,
          "results": [...styles]
        }
        res.send(result);
      } else {
        res.status(404);
        res.send({ 'Erorr ': 'unable to find product styles with provided id. Please check the id and try agian.' });
      }
    } finally {
      await client.close();
    }
  }
};

// resultObj = {
//   "style_id": String,
//   "name": String,
//   "original_price": String,
//   "sale_price": String,
//   "default?": Boolean,
//   "photos": [{
//     "thumbnail_url": "https://images.unsplash.com/photo-1501088430",
//     "url": "https://images.unsplash.com/photo-1501088430049-71c7"
//   }],
//   "skus": {
//     "2390357": {
//       "quantity": 8,
//       "size": "XS"
//     },
//   }
// }