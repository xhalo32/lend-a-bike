import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import Titlebar from './Titlebar';
import Login from './Login';
import Memos from './Memos';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Titlebar />
          <Route
            path='/login'
            exact
            render={props => <Login
              {...props}
              cookies={this.props.cookies}
            />}
          />
          <Route
            path='/'
            exact
            render={props => <Memos
              {...props}
              cookies={this.props.cookies}
            />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);

// vim: et ts=2 sw=2 :
