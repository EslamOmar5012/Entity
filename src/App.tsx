import { LanguageProvider } from './hooks/use-language';
import { Home } from './pages/home';

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;
