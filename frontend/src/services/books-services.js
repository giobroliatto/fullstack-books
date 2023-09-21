import axios from "axios";

const apiBooks = axios.create({baseURL: "http://localhost:8000/books"});

async function getBooks() {
  const response = await apiBooks.get('/');

  return response.data;
}

export { getBooks };