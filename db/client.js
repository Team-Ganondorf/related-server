const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const source = process.env.DATABASE || 'attelier-product-db';

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  console.log('attempting to connect')
  try {
    await client.connect();
    console.log('connecting');

    await client.db(source).command({ ping: 1 });
    console.log("Connected successfully to database server");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
