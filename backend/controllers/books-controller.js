const { getAllBooks, getBookById, addBook, modifyBook, removeBook } = require('../services/books-services')

function getBooks(req, res) {
    try {
        const books = getAllBooks();

        res.status(200);
        res.send(books);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const book = getBookById(id);
            res.status(200);
            res.send(book);
        } else {
            res.status(422);
            res.send('id not found');
        }
        
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body;
        addBook(newBook);
        
        res.status(201);
        res.send(`book '${newBook.name}' added`)
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        modifyBook(body, id);
        
        res.status(200);
        res.send(`book updated to '${body.name}'`)
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id;

        removeBook(id);
        
        res.status(200);
        res.send(`book deleted`)
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}