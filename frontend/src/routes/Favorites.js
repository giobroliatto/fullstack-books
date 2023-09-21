import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorite, getFavorites } from '../services/favorites-services';
import bookImg from '../assets/book.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #32113b 35%, #6d5a70);
`

const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const apiFavorites = await getFavorites()
    setFavorites(apiFavorites);
  }

  async function removeFavorite(id) {
    await deleteFavorite(id);
    await fetchFavorites();
    alert(`book ${id} removed from favorites`);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <AppContainer>
      <div>
        <Title>Here are your favorite books:</Title>
        <ResultContainer>
          {
            favorites.length !== 0 ? favorites.map(fav => (
              <Result onClick={() => removeFavorite(fav.id)}>
                <img src={bookImg} alt="damn-book"/>
                <p>{fav.name}</p>
              </Result>
            )) : null
          }
        </ResultContainer>
      </div>
    </AppContainer>
  );
}

export default Favorites;
