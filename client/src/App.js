import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index';

import spotifyLoggedIn from './pages/spotifyLoggedIn';
import playListEdit from './pages/playlistEdit';

import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/spotifyLoggedIn" component={spotifyLoggedIn} />
          <Route path="/playlist/edit/:id" component={playListEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
