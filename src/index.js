const express = require('express')
const mysql = require('mysql2');
const app = express()
const port = 4000

// DB Connection
// const db = mysql.createConnection({
//     host: 'mysql',
//     user: 'user',
//     password: 'password',
//     database: 'mydb'
// });

// db.connect(err => {
//     if (err) {
//         console.error('Database connection failed:', err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database.');
// });

// Routes
app.get('/', (req, res) => {
    // db.query('SELECT NOW() as time', (err, results) => {
    //     if (err) return res.status(500).send('DB exxxxxxxxxrror');
    //     res.send(`Hello from Dockerized Node.js App! Time: ${results[0].time}`);
    // });
    res.send('Hello World app!')
});



app.get('/home', (req, res) => {
    res.send('home!')
})


app.get('/about', (req, res) => {
    res.send('about!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
