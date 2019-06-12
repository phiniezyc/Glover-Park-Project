import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index';
import { spotifyLoggedIn } from './pages/spotifyLoggedIn';

import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/spotifyLoggedIn" component={spotifyLoggedIn} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);


export default App;
