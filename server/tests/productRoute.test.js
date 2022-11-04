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
  // test for valid params
  // test for valid response code
  // test for valid response data type
  // test for valide response data model
  // test for time it takes for response to be received
  // test for response content type

  // test for invalid params
  // test for no params
  // test for error status code
  // should not receive an id as params
  // should respond with an error message
  // should respond with status code 404

  describe("provided a product id", () => {

    test("should receive a valid id as params", async () => {
      const id = 40;
      const response = await request(app).get(`/products/${id}/`)
        .expect(200)
        .expect('Content-Type', /json/)
      // .expect()
      // .expect('Content-Length', '15')
      console.log(response);
    });

    test("should receive a valid id as params", async () => {
      const id = 40;
      const response = await request(app).get(`/products/${id}/`)
        .expect(200)
        .expect('Content-Type', /json/)
      // .expect()
      // .expect('Content-Length', '15')
      console.log(response);
    });

    // app.get('/', function (req, res) {
    //   res.status(200).json({ name: 'john' });
    // });

  });
});
