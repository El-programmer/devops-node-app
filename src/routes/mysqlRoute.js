const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'mysql',     // Use service name or container name in Docker
  user: 'user',
  password: 'password',
  database: 'mydb',
};

router.get('/', async (req, res) => {
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);

    // Create table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS demo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        message VARCHAR(255)
      )
    `);

    // Insert and fetch a row
    await connection.execute(`INSERT INTO demo (message) VALUES (?)`, ['Hello from MySQL!']);
    const [rows] = await connection.execute(`SELECT * FROM demo ORDER BY id DESC LIMIT 1`);

    await connection.end();

    res.send(`✅ MySQL is connected. Row: ${JSON.stringify(rows[0])}`);
  } catch (err) {
    console.error('MySQL error:', err);
    res.status(500).send('❌ MySQL connection failed.');
  }
});

module.exports = router;
