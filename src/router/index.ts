// 创建一个路由器并暴露
// 第一步：引入 createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入一个一个可能要的组件
import Home from "@/pages/RouterOverview/Home.vue";
import News from "@/pages/RouterOverview/News.vue";
import About from "@/pages/RouterOverview/About.vue";
import Detail from "@/pages/RouterOverview/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
  // history: createWebHashHistory(), // 路由器的工作模式，哈希模式
  history: createWebHistory(), // 路由器的工作模式
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    {
      name: "news",
      path: "/news",
      component: News,
      children: [
        {
          name: "detail",
          // path: "detail",
          path: "detail",
          // 使用 params 时需要在 path 中占位
          // path: "detail/:id/:title/:content?",
          component: Detail,
          // 第一种写法：将路由收到的所有 params 参数作为 props 传给路由组件。
          // props: true,
          // 第二种写法：函数写法，可以自己决定将什么作为 props 给路由组件。
          props(route) {
            // props 中传递的是路由信息。
            // console.log(route);
            return route.query;
          },
          // 第三种写法：对象写法，可以自己决定将什么作为 props 给路由组件。
          // props: {
          //   // 数据是写死了的。
          //   id: "id",
          //   title: "title",
          //   content: "content",
          // },
        },
      ],
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
  ],
});

// 暴露 Router
export default router;
