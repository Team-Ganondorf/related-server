module.exports = {
  getAllProducts: async (req, res) => {
    try {
      console.log("hit all products request");
      console.log(req.params);
    } catch (error) {
      console.log(error);
      res.status(500).send("There was an error retreiving all products");
    }
  }
};
