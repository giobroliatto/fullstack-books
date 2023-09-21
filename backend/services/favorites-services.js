const fs = require('fs');

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json'));
}

function addFavorite(id) {
  const books = JSON.parse(fs.readFileSync('books.json'));
  const favorites = JSON.parse(fs.readFileSync('favorites.json'));

  const addedBook = books.find(book => book.id === id);
  const newBookList = [...favorites, addedBook];

  fs.writeFileSync('favorites.json', JSON.stringify(newBookList));
}

function removeFavorite(id) {
  const books = JSON.parse(fs.readFileSync('favorites.json'));

  const filteredBooks = books.filter(book => book.id !== id);

  fs.writeFileSync('favorites.json', JSON.stringify(filteredBooks));
}

module.exports = {
  getAllFavorites,
  addFavorite,
  removeFavorite
}