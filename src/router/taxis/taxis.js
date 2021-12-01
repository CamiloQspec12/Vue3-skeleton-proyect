export default [
    {
        path: "/taxis",
        name: "taxis",
        component: () => import(/* webpackChunkName: "about" */ "../../views/taxis"),
    },
];
