import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHistory();
const routerHashHistory = createWebHashHistory();

import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFound from './pages/notFound';

const routers = createRouter({
    history: routerHashHistory,
    hashHistory: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFound,
        },
    ]
});

export default routers;