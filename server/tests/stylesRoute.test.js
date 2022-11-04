const request = require('supertest');
const assert = require('assert');
const express = require('express');
const routes = require('../routes/index.js');

const app = express();

app.get('/', function (req, res) {
  res.send('success');
});

app.use(routes);

describe('GET /', () => {
  describe("provided a product id", () => {
    test("should receive a valid id as params", async () => {
      const id = 40;
      const response = await request(app).get(`/products/${id}/styles`)
        .expect(200)
        .expect('Content-Type', /json/)
    });
  });
});
