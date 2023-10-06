const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello There!!! This is the root GET method');
});

app.listen(port, () => {
    console.log('API Served At =>  http://157.230.236.144:3000');
});
