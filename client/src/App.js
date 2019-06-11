import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index.js';
import SpotifyLoggedIn from './pages/spotifyLoggedIn.js';
import individualPlaylistView from './pages/individualPlaylistView.js';

import './App.css';


const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/spotifyLoggedIn" component={SpotifyLoggedIn} />
          <Route exact path="/individualPlaylist" component={individualPlaylistView} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);


export default App;
