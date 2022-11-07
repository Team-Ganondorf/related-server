require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./middleware/auth.js');
const routes = require('./routes');
const db = require('../db/client.js');
const app = express();
const campusAPI = 'api/fec2/hr-rfc';
const cache = require('./cache.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('success');
});

app.get('/loaderio-eae136dd98e413d38d172053a20f0383.txt', (req, res) => {
  res.send('loaderio-eae136dd98e413d38d172053a20f0383');
});

// Authorization
app.use(auth);
app.use(cache(3000));



app.use(routes);

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
  console.log('Server is successfully running on port ' + PORT);
});