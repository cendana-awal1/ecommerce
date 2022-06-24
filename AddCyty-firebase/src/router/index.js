import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import AddCity from '../views/AddCity.vue';
import EditCity from '../views/EditCity.vue';


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/add-city',
        name: 'add-city',
        component: AddCity


    },
    {
        path: '/edit-city/:id',
        name: 'edit-city',
        component: EditCity


    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;

