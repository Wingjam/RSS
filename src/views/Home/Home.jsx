import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import homeStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

class Home extends React.Component {
    render() {
        return 'Welcome Home!'
    }
}

export default withStyles(homeStyle)(Home)
