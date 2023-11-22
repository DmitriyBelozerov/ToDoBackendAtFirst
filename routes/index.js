const router = require('express').Router();
const ItemTodo = require('../models/itemTodo');

router.post('/', (req, res) => {
    const { name } = req.body;
    ItemTodo.create({ name })
        .then((item) => {
            res.send({ data: item })
        })
        .catch((err) => {
            res.status(500).send({ message: `Произошла ошибка: ${err}` })
        })
})

router.get('/', (req, res) => {
    console.log(req.method);
    ItemTodo.find({})
        .then((items) => {
            res.status(200).send(items)
        })
        .catch((err) => {
            res.status(500).send({ message: `Произошла ошибка: ${err}` })
        })
})


router.delete('/:id', (req, res, next) => {
    ItemTodo.findByIdAndDelete(req.params.id)
        .then((item) => {
            !item ?
                res.status(404).send({ message: 'Такого пункта не существует' }) :
                res.send({ data: item })
        })
        .catch(err =>
            res.status(500).send({ message: `Произошла ошибка: ${err}` })
        )
})

module.exports = router;