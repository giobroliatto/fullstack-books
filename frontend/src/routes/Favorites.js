import styled from 'styled-components';
import Search from '../components/Search';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #32113b 35%, #6d5a70);
`

function Favorites() {
  return (
    <AppContainer>

      <Search/>

    </AppContainer>
  );
}

export default Favorites;
