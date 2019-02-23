import Contact from '../components/pages/Contact';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Clans from '../components/pages/Clans';
import ClansChild from '../components/pages/ClansChild';
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
        path: '/clans', component: Clans,
        meta: {auth: true},
    },
    {
        path: '/clans/:id', component: ClansChild,
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