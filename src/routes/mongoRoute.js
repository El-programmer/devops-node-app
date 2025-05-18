const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://root:password@mongo:27017/?authSource=admin';

const dbName = 'testdb';

router.get('/', async (req, res) => {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('demo');
    
    // Insert and fetch a sample document
    await collection.insertOne({ message: 'Hello from MongoDB!' });
    const doc = await collection.findOne({}, { sort: { _id: -1 } });

    await client.close();
    res.send(`✅ MongoDB is connected. Document: ${JSON.stringify(doc)}`);
  } catch (err) {
    console.error('MongoDB error:', err);
    res.status(500).send('❌ MongoDB connection failed.');
  }
});

module.exports = router;
