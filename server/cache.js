const NodeCache = require('node-cache');

const cache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
  if (req.method !== 'GET') {
    return next();
  }

  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    res.send(cachedResponse);
  } else {
    res.originalUrl = res.send;
    res.send = (body) => {
      res.originalUrl(body);
      cache.set(key, body, duration);
    };
    next();
  }

};