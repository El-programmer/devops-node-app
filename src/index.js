const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const os = require('os');

// Routes
const redisRoute = require('./routes/redisRoute');
const mongoRoute = require('./routes/mongoRoute');
const mysqlRoute = require('./routes/mysqlRoute');

app.get('/', async (req, res) => {
  console.log(`🚀 Request from nginx to ${os.hostname}`);
  res.send(`
    <h1>Home of ${os.hostname}</h1>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/redis">Redis Test</a></li>
      <li><a href="/mongo">MongoDB Test</a></li>
      <li><a href="/mysql">MySQL Test</a></li>
    </ul>
  `);
});


app.get('/home', (req, res) => {
    res.send('home!')
})


app.get('/about', (req, res) => {
    res.send('about!')
})
app.use('/redis', redisRoute);
app.use('/mongo', mongoRoute);
app.use('/mysql', mysqlRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT} of ${os.hostname}`);
});
