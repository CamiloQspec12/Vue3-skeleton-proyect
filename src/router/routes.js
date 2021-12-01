import Home from "../views/Home.vue";

// Import from each modulo or page
import Taxis from './taxis/taxis';

export default [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    ...Taxis
];
