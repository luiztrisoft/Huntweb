import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//React Dom só é utilizado uma unica vez para renderizar nosso primeiro componente. App.js
serviceWorker.unregister();
/**
 *  Sempre que formos utilizar o html  (exemplo <App/>) precisamos importar o React para funcionar o jsx
 */