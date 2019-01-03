import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Persons from './components/Persons';

export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/persons/:id?', component: Persons },
]