import Header from './components/header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #32113b 35%, #6d5a70);
`

function App() {
  return (
    <AppContainer>

      <Header/>

    </AppContainer>
  );
}

export default App;
