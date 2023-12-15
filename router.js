import Loginsuccessful from './src/components/Vote.vue';
import Login from './src/components/LogIn.vue'
import VoteResult from "@/components/VoteResult.vue";
import Register from "@/components/Register.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    // other routes
    {
        path: '/loginsuccessful',
        name: 'Loginsuccessful',
        component: Loginsuccessful,
    },
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/VoteResult',
        name: 'VoteResult',
        component: VoteResult,
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
    }
    // other routes
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;