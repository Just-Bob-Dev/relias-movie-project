import React from 'react';
import ReactDOM from 'react-dom';

//Styles which I don't think apply at the moment but I am leaving for now.
import './styles/index.css';

//React Router allows for other pages in React
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components needed for app
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
