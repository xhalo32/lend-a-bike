import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Home page</h2>
          <Link to='login'>
            <Button bsStyle='primary'>Login</Button>
          </Link>
        </Jumbotron>
      </Grid>
    );
  }
}

// vim: et sw=2 ts=2 :
