<template>
  <div class="person">
    <h1>【ref()】创建响应式基本类型数据</h1>
    <!-- 使用 ref 中的 {{ thing }} 时无需加 value 如 {{ thing.value }}，Vue 会自动处理。 -->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="RefBasic">
import { ref } from "vue";

// 数据
let name = ref("张三");
let age = ref(18);
let tel = "12345678901";
let address = "北京市朝阳社区";

// 方法
function changeName() {
  name.value = "Zhang San";
}

function changeAge() {
  age.value += 1;
}
function showTel() {
  alert(tel);
}
</script>

<style scoped>
.person {
  background-color: honeydew;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
