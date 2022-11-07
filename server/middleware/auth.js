module.exports = async (req, res, next) => {
  const token = req.query.authorization;
  if (token !== process.env.SECRET_AUTH_KEY) {
    res.status(401);
    res.send('Error not authorized');
  } else {
    next();
  }
};