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
        sidebarName: 'home:title',
        navbarName: 'home:title',
        icon: HomeIcon,
        component: HomePage,
    },
    {
        path: '/bets',
        sidebarName: 'bets:title',
        navbarName: 'bets:title',
        icon: BetsIcon,
        component: BetsPage,
    },
    {
        path: '/stats',
        sidebarName: 'stats:title',
        navbarName: 'stats:title',
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
