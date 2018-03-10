import React, { Component } from 'react';

// Material-ui
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { ListItemIcon, ListItemText } from 'material-ui/List';

// Icons
import AccountCircle from 'material-ui-icons/AccountCircle';
import LogoutIcon from 'material-ui-icons/ExitToApp';
import HelpIcon from 'material-ui-icons/Help';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppBarCustom extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Remote Sugar Shack
            </Typography>
            { this.props.logged ? <Logged logout={this.props.logout} /> : <Login login={this.props.login} /> }
          </Toolbar>
      </AppBar>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <Button color="inherit" onTouchTap={this.props.login}>
        Login
      </Button>
    );
  }
}

class Logged extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </MenuItem>
          <MenuItem onTouchTap={this.props.logout}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

AppBarCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarCustom);