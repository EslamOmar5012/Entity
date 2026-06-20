import { ThemeProvider } from './hooks/use-theme';
import { LanguageProvider } from './hooks/use-language';
import { Home } from './pages/home';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
