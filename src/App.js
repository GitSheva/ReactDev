import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/NotFound/NotFound.js';
import CreateReferral from './components/CreateReferral/CreateReferral.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main role="main" className="container">
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/create" component={CreateReferral} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
