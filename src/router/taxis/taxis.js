export default [
    {
        path: "/taxis",
        name: "taxis",
        component: () => import(/* webpackChunkName: "about" */ "../../views/taxis"),
        children: [
            {
                path: "servicios",
                name: "taxis.servicios",
                component: () => import(/* webpackChunkName: "about" */ "../../views/taxis/servicios"),
            },
            {
                path: "inconvenientes",
                name: "taxis.inconvenientes",
                component: () => import(/* webpackChunkName: "about" */ "../../views/taxis/inconvenientes"),
            },
            {
                path: "soporte-general",
                name: "taxis.soporte-general",
                component: () => import(/* webpackChunkName: "about" */ "../../views/taxis/soporteGeneral"),
            }
        ]
    },
];
