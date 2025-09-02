import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import { ThemeProvider } from './utils/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </ThemeProvider>,
);
