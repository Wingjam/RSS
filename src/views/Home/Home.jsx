import React from 'react'
import { compose } from 'redux'
import { withNamespaces } from 'react-i18next';
import withStyles from '@material-ui/core/styles/withStyles'

import homeStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

class Home extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <div>
                <h1>{t('Welcome home')}</h1>
            </div>
        )
    }
}

export default compose(
    withStyles(homeStyle),
    withNamespaces('home'),
)(Home)
