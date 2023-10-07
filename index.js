const express = require('express');
const app = express();
const port = 3000;

app.get('/say', (req, res) => {
  const keyword = req.query.keyword;
  const functionName = require('./my-function');
  const response = functionName(keyword);
  res.send(response);
});

app.get('/favorite', (req, res) => {
    const keyword = req.query.band;
    const functionName = require('./my-favorite-band');
    const response = functionName(keyword);
    res.send(response);
});

app.get('/', (req, res) => {
    res.send('Hello There!!! This is the root GET method. Please use say or favorite to go to destinated URL!');
});

app.listen(port, () => {
    console.log('API Served At =>  http://192.241.159.156:3000');
});
