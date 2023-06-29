import React from 'react';

import './styles/main.scss';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin>">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
