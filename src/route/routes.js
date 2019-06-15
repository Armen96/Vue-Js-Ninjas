import Contact from '../components/pages/Contact';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Dashboard from '../components/pages/Dashboard';
import Profile from '../components/pages/Profile';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import PageNotFound from '../components/layouts/PageNotFound';

export const routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/login', component: Login ,
    },
    {
        path: '/register', component: Register ,
    },
    {
        path: '/about', component: About ,
    },
    {
        path: '/contact', component: Contact,
        meta: {auth: true}
    },
    {
        path: '/dashboard', component: Dashboard,
        meta: {auth: true},
    },
    {
        path: '/profile', component: Profile,
        meta: {auth: true}
    },
    {
        path: "*", component: PageNotFound
    }
];
