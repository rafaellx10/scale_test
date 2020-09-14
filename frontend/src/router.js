import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Game from './pages/Game';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/" component={Game} /> */}
      <Route path="/game/:id" component={Game} />
    </BrowserRouter>
  );
}
