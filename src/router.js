import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import AboutPage from "./pages/AboutPage.vue";

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/about",
        component: AboutPage
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;