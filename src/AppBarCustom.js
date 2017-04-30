import React, { Component } from 'react';

// Material-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app';
import HelpIcon from 'material-ui/svg-icons/action/help';

class AppBarCustom extends Component {

  render() {
    return (
      <AppBar
        title="Remote Sugar Shack"
        showMenuIconButton={false}
        iconElementRight={this.props.logged ? <Logged logout={this.props.logout} /> : <Login login={this.props.login} />}
      />
    );
  }
}

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    // The spread operator is used to pull variables off props
    // Prevent Unknown prop `logout` on <div> tag
    const { login, ...rest } = this.props
    return (
      <FlatButton {...rest} label="Login" onTouchTap={this.props.login} />
    );
  }
}

class Logged extends Component {
  static muiName = 'IconMenu';

  render() {
    // The spread operator is used to pull variables off props
    // Prevent Unknown prop `logout` on <div> tag
    const { logout, ...rest } = this.props
    return (
      <IconMenu
        {...rest}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Help" leftIcon={<HelpIcon/>} />
        <MenuItem primaryText="Sign out" onTouchTap={this.props.logout} leftIcon={<LogoutIcon/>} />
      </IconMenu>
    );
  }
}

export default AppBarCustom;