import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ShipProvider } from './context';

ReactDOM.render(
  <ShipProvider>
    <App />
  </ShipProvider>,
  document.getElementById('root')
);
registerServiceWorker();
