const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(404).send(`<h1>Страница! ${req.params}</h1>`)
})

module.exports = router;