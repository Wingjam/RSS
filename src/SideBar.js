import React from 'react';

// Material-ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class SideBar extends React.Component {

  render() {
    return (
        <Drawer docked={true}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    );
  }
}

export default SideBar;