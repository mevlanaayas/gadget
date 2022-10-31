import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from "@/views/HistoryView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/history',
            name: 'history',
            component: HistoryView,
            props: true
        },
        {
            path: '/watchlist',
            name: 'watchlist',
            component: () => import('../views/WatchListView.vue')
        },
        {
            path: '/recent',
            name: 'recent',
            component: () => import('../views/RecentView.vue')
        }
    ]
})

export default router
