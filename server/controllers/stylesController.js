module.exports = {
  getAllProducts: async (req, res) => {
    try {
      res.send("hit all products request");
    } catch (error) {
      console.log(error);
      res.status(500).send("There was an error retreiving all products");
    }
  }
};
