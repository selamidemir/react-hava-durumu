import { CityProvider } from './context/CityContext';
import Container from './components/Container';

function App() {
  return (
    <CityProvider>
      <Container/>
    </CityProvider>
  );
}

export default App;
