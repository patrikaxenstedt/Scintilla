import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from './components/Themes/themeContext';
import Toggle from './components/Themes/themeToggle';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="absolute right-0 top-20 mr-4 mt-4 md:mr-6 md:mt-6">
        <Toggle />
      </div>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
