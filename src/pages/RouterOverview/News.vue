<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink
          :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"
          >{{ news.title }}</RouterLink
          > -->
        <!-- 第二种写法 -->
        <!-- replace 模式不能够返回 -->
        <RouterLink
          replace
          :to="{
            name: 'detail',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
          >{{ news.title }}</RouterLink
        >
        <!-- 第三种写法 -->
        <!-- <RouterLink
            :to="{
              // 在 to 对象中使用 params 不能够使用 path
              // path: '/news/detail',
              name: 'detail',
              // params 无法传递数组
              params: { id: news.id, title: news.title, content: news.content },
            }"
            >{{ news.title }}</RouterLink
            > -->
        <button @click="showNewsDetail(news)">查看新闻</button>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const newsList = reactive([
  { id: "01", title: "很好的抗癌食物", content: "西兰花" },
  { id: "02", title: "如何一夜暴富", content: "学 IT" },
  { id: "03", title: "震惊，万万没想到", content: "明天是周一" },
  { id: "04", title: "好消息！", content: "快过年了" },
]);
const router = useRouter();

interface NewsInter {
  id: string;
  title: string;
  content: string;
}
function showNewsDetail(news: NewsInter) {
  router.replace({
    name: "detail",
    query: {
      id: news.id,
      title: news.title,
      content: news.content,
    },
  });
}
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #63967e;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #63967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
