const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const source = process.env.DATABASE || 'attelier-product-db';
const client = new MongoClient(uri, { useUnifiedTopology: true });

let db;

async function run() {
  if (!db) {
    console.log('attempting to connect');
    try {
      await client.connect();
      console.log('connecting');
      db = client.db(source);
      console.log('successfully connected to db');
    } catch (err) {
      throw err;
    };
  };
  return db;
};

run();

module.exports = { run };