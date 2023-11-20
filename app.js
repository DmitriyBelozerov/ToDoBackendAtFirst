const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();
app.use(bodyParser.json());

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




