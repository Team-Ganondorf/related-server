module.exports = async (req, res, next) => {
  const token = req.params.authorization;
  if (token !== process.env.SECRET_AUTH_KEY) {
    res.end('Error not authorized');
  } else {
    next();
  }
};