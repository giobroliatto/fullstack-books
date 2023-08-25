const { Router } = require('express');
const { getBooks } = require('../controllers/books-controller');

const router = Router();

router.get('/', getBooks);

router.post('/', (req, res) => {
    res.send('post')
})

router.patch('/', (req, res) => {
    res.send('patch')
})

router.delete('/', (req, res) => {
    res.send('delete')
})

module.exports = router;