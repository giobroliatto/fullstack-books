import styled from 'styled-components';
import Search from '../components/Search';
import LastReleases from '../components/LastReleases';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #32113b 35%, #6d5a70);
`

function Home() {
  return (
    <AppContainer>

      <Search/>
      <LastReleases/>

    </AppContainer>
  );
}

export default Home;
