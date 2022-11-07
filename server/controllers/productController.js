const { loadCache } = require('../../db/dbcache.js');
module.exports = {
  getProductById: async (req, res) => {
    const id = +req.params.product_id;
    try {
      const cache = await loadCache();
      const data = cache.filter((product) => product.id === id)[0];
      if (data) {
        res.send(data);
      } else {
        res.status(404);
        res.send('not found');
      }
    } catch (err) {
      console.log('Error retreiving product by provided id ' + err);
    }
  }
};
