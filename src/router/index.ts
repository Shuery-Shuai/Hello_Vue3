// 创建一个路由器并暴露
// 第一步：引入 createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入一个一个可能要的组件
import Home from "@/components/RouterOverview/Home.vue";
import News from "@/components/RouterOverview/News.vue";
import About from "@/components/RouterOverview/About.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

// 暴露 Router
export default router;
