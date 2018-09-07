import React, { Component } from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { DirectionsBike } from '@material-ui/icons';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Lend extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="extendedFab"
          color='secondary'
          aria-label="Delete"
          className={classes.fab}
        >
          <DirectionsBike
            className={classes.extendedIcon}
          />
          Lainaa
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Lend);

// vim: et ts=2 sw=2 :
