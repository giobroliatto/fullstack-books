const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));

    return books.find(book => {
        return book.id == id;
    });
}

function addBook(newBook) {
    const books = JSON.parse(fs.readFileSync('books.json'));

    const newBookList = [...books, newBook];

    fs.writeFileSync('books.json', JSON.stringify(newBookList));
}

function modifyBook(changes, id) {
    let currentBooks = JSON.parse(fs.readFileSync('books.json'));

    const changedId = currentBooks.findIndex(book => book.id == id);

    const changedContent = {...currentBooks[changedId], ...changes}

    currentBooks[changedId] = changedContent;

    fs.writeFileSync('books.json', JSON.stringify(currentBooks));
}

function removeBook(idToRemove) {
    const currentBooks = JSON.parse(fs.readFileSync('books.json'));

    const newBookList = currentBooks.filter(book => book.id !== idToRemove);

    fs.writeFileSync('books.json', JSON.stringify(newBookList));
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    modifyBook,
    removeBook
}