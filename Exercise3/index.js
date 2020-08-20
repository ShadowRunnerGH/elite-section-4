const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
    res.send("Go to /hello");
})
app.get('/hello', (req, res) => {
    res.send('Hello World!');
})
app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})