import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/layout/Home.vue';
import SpaceC from './components/layout/SpaceC.vue';

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Espace Client",
        path: "/SpaceC",
        component: SpaceC
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;