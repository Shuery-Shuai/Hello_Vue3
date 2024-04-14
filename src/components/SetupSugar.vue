<template>
  <div class="person">
    <h1>【setup()】语法糖</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- 使用 name="SetupSugar" 需要安装插件 vite-plugin-vue-setup-extend。 -->
<script lang="ts" setup name="SetupSugar">
// 数据，原本写在 data() 中，此时的 name、age、tel 都非响应式数据。
let name = "张三";
let age = 18;
let tel = "12345678901";
let address = "北京市朝阳社区";

// 方法
function changeName() {
  name = "Zhang San"; // 注意：这样修改 name 页面不会发生变化。
  console.log(name); // name 确实已更改，但却并非响应式。
}

function changeAge() {
  age += 1; // 注意：这样修改 age 页面不会发生变化。
  console.log(age); // age 确实已更改，但却并非响应式。
}
function showTel() {
  alert(tel);
}
</script>

<style scoped>
.person {
  background-color: gainsboro;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
