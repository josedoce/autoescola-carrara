import Roteamento from './Roteamento';
import ThemeProvider from './styles/ThemeProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
      <ThemeProvider>
        {/* global style é responsavel por aplicar todos os estilos globais */}
        <GlobalStyle/> 
          <Roteamento/>
      </ThemeProvider>

  );
}

export default App;
