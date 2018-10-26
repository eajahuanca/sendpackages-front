import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import PageLogin from './views/LoginPage/PageLogin';
import Dashboard from 'layouts/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={PageLogin} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;