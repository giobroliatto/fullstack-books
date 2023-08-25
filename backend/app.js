const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

const booksRoute = require('./routes/books-routes');

app.use('/books', booksRoute);