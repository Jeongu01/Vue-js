import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

// 라우터 구성 객체

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path:'',
                name:'home',
                component: HomeView,    // static import
            },
            {
                path:'/about',
                name:'about',
                component: () => import('../views/AboutView.vue'),   // dynamic import
            }
        ],
    }
);