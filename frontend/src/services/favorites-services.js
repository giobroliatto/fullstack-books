import axios from "axios";

const apiFavorites = axios.create({baseURL: "http://localhost:8000/favorites"});

async function getFavorites() {
  const response = await apiFavorites.get('/');

  return response.data;
}

async function postFavorite(id) {
  await apiFavorites.post(`/${id}`)
}

async function deleteFavorite(id) {
  await apiFavorites.delete(`/${id}`)
}

export { getFavorites, postFavorite, deleteFavorite };