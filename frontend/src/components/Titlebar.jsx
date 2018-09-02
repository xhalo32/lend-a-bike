import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
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
            Memoserver
          </Typography>
          <Button
            variant='text'
            color='inherit'
            href='/login'
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

// vim: et ts=2 sw=2 :
