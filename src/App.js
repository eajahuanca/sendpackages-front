import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import PageLogin from './views/LoginPage/PageLogin';
import PageMain from './views/PageMain';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={PageLogin} />
          <Route path="/" component={PageMain} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;