// Icons
import HomeIcon from '@material-ui/icons/Home'
import BetsIcon from '@material-ui/icons/AttachMoney'
import StatsIcon from '@material-ui/icons/ShowChart'

// Views
import HomePage from 'views/Home/Home'
import BetsPage from 'views/Bets/Bets'
import StatsPage from 'views/Stats/Stats'

const appRoutes = [
    {
        path: '/home',
        sidebarName: 'Home',
        navbarName: 'Home',
        icon: HomeIcon,
        component: HomePage,
    },
    {
        path: '/bets',
        sidebarName: 'Bets',
        navbarName: 'Bets',
        icon: BetsIcon,
        component: BetsPage,
    },
    {
        path: '/stats',
        sidebarName: 'Stats',
        navbarName: 'Stats',
        icon: StatsIcon,
        component: StatsPage,
    },
    {
        // Redirect / to /home
        redirect: true,
        path: '/',
        to: '/home',
        navbarName: 'Redirect',
    },
]

export default appRoutes
