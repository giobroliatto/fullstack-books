const { getAllBooks } = require('../services/books-services')

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        res.send(books);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

module.exports = {
    getBooks
}