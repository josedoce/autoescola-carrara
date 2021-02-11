import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';
import {BrowserRouter as Router} from 'react-router-dom';
import Roteamento from './routes';

function App() {
  return (
      <ThemeProvider>
        {/* global style é responsavel por aplicar todos os estilos globais */}
        <GlobalStyle/> 
        <Router>
            <Roteamento/>
        </Router>
      </ThemeProvider>

  );
}

export default App;
