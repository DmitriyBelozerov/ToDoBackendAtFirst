const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const PORT = 3000;
const allowedCors = [
    'https://dmbelozerov.nomoredomainsclub.ru',
    'http://dmbelozerov.nomoredomainsclub.ru',
    'http://localhost:3000',
    'http://localhost:3001',
  ];

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    const { origin } = req.headers;
    const { method } = req;
    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    const requestHeaders = req.headers['access-control-request-headers'];
    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', true);
    }
    if (method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
        res.header('Access-Control-Allow-Headers', requestHeaders);
        return res.end();
    }
    return next();
});

app.use('/itemtodo', router);



mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/mytododb')
    .then(() => {
        console.log('Connected!');
        app.listen(PORT, console.log(`App listen ${PORT}`))
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });




