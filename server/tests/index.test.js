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
  describe("ping default route", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });

    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/store");
      expect(response.statusCode).toBe(404);
    });
  });
});
