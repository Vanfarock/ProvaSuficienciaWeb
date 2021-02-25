import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import MainContent from './pages/MainContent';

function App() {
  return (
    <ThemeProvider theme={dark}>
        <MainContent />
        <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
