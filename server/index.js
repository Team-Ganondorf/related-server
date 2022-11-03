require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const routes = require('./routes');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
// app.use(routes);

// api/fec2/hr-rfc

// Database
// const db = require('../db/client.js');
// db.connect();

app.get('/', (req, res) => {
  res.send('success');
});

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {
  console.log('Server is successfully running on port ' + PORT);
});