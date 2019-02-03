import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

// Core Components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Sidebar from 'components/Sidebar/Sidebar.jsx'

// Routes
import appRoutes from 'routes/app.jsx'

import appStyle from 'assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx'

// Images
import image from 'assets/img/sidebar-5.jpg'
import logo from 'assets/img/maple.png'

const switchRoutes = (
    <Switch>
        {appRoutes.map((prop, key) => {
            return prop.redirect ? (
                <Redirect from={prop.path} to={prop.to} key={key} />
            ) : (
                    <Route path={prop.path} component={prop.component} key={key} />
                )
        })}
    </Switch>
)

class App extends React.Component {
    state = {
        mobileOpen: false,
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen })
    }
    resizeFunction = () => {
        if (window.innerWidth >= 960) {
            this.setState({ mobileOpen: false })
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.resizeFunction)
    }
    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false })
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeFunction)
    }
    render() {
        const { classes, ...rest } = this.props
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={appRoutes}
                    logoText={'RSS'}
                    logo={logo}
                    image={image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header
                        routes={appRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />

                    <div className={classes.content}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(appStyle)(App)
