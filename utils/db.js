const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();
const uri = 'mongodb+srv://'+process.env.MONGO_USERNAME+':'+process.env.MONGO_PASSWORD+'@canadian-pollution.ac2ym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useUnifiedTopology: true });

/**
 * A function to stablish a connection with a MongoDB instance.
 */
async function connectToDB() {
  try {
    await client.connect();
    let db = client.db("pollution-stats");
    console.log("Connected successfully to mongoDB");
    return db;
  } catch (err) {
    throw err;
  }
}

async function getDb() {
  return db;
}

async function closeDBConnection() {
  try {
    await client.close();
  } catch (err) {
    throw err;
  }
}

module.exports = { connectToDB, getDb, closeDBConnection };
