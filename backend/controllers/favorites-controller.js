const { getBookById } = require('../services/books-services');
const { getAllFavorites, addFavorite, removeFavorite } = require('../services/favorites-services');

function getFavorites(req, res) {
    try {
        const favorites = getAllFavorites();

        res.status(200);
        res.send(favorites);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

function postFavorite(req, res) {
	try {
		const bookId = req.params.id;
		addFavorite(bookId);

		const bookData = getBookById(bookId);
		
		res.status(201);
		res.send(`book '${bookData.name}' added to favorites`)
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
}

function deleteFavorite(req, res) {
	try {
		const id = req.params.id;

		removeFavorite(id);
		
		res.status(200);
		res.send(`book deleted from favorites`)
	} catch (err) {
		res.status(500);
		res.send(err.message);
	}
}

module.exports = {
	getFavorites,
	postFavorite,
	deleteFavorite
}