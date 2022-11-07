require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const campusAPI = 'api/fec2/hr-rfc';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('success');
});

app.get('/loaderio-eae136dd98e413d38d172053a20f0383.txt', (req, res) => {
  res.send({ key: 'loaderio-eae136dd98e413d38d172053a20f0383' });
});

app.use(routes);

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
  console.log('Server is successfully running on port ' + PORT);
});