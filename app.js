const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mytododb');

app.use(bodyParser.json())

app.use('/', router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})