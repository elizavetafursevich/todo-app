import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        component: () => import('../pages/MainPage.vue'),
        meta: {
            layout: DefaultLayout,
        }
    },
    {
        path: "/about",
        component: () => import('../pages/AboutPage.vue'),
        meta: {
            layout: DefaultLayout,
        }
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;