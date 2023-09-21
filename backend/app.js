const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

app.use(express.json());
app.use(cors({origin: '*'}))

const booksRoute = require('./routes/books-routes');
const favoritesRoute = require('./routes/favorites-routes');

app.use('/books', booksRoute);
app.use('/favorites', favoritesRoute)