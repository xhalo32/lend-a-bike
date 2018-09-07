import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const styles = {
  flex: {
    flexGrow: 1,
  },
}

export default class Titlebar extends Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='headline'
            color='inherit'
            style={styles.flex}
          >
            Lend-a-Bike
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

// vim: et ts=2 sw=2 :
