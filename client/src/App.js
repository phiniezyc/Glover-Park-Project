import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/index';

import spotifyLoggedIn from './pages/spotifyLoggedIn';
import playListEdit from './pages/playlistEdit';

import './App.css';


const App = () => (
  <div className="App">
    <Router >
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/spotifyLoggedIn" component={spotifyLoggedIn} />
          <Route path="/playlist/edit/:id" component={playListEdit} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
