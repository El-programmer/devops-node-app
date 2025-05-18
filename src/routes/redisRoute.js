const express = require('express');
const router = express.Router();
const { createClient } = require('redis');

// Connect to Redis
const client = createClient({
  socket: {
    host: 'redis', // container name or service name in Docker
    port: 6379
  }
});

client.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

client.connect();

router.get('/', async (req, res) => {
  try {
    await client.set('message', 'Hello from Redis!');
    const value = await client.get('message');
    res.send(`✅ Redis Connected. Value: ${value}`);
  } catch (err) {
    console.error('Redis error:', err);
    res.status(500).send('❌ Redis connection failed.');
  }
});

module.exports = router;
