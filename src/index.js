import React from 'react';
import ReactDOM from 'react-dom';

//Styles which I don't think apply at the moment but I am leaving for now.
import './styles/index.css';

//Components needed for app
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('root'));
registerServiceWorker();
