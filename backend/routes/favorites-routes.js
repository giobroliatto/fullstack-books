const { Router } = require('express');
const { postFavorite, getFavorites, deleteFavorite } = require('../controllers/favorites-controller');

const router = Router();

router.get('/', getFavorites);

router.post('/:id', postFavorite);

router.delete('/:id', deleteFavorite);

module.exports = router;