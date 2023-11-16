const express = require('express');
// Слушаем 3000 порт
const router = require('./routes/index');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})