<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  beforeCreate() {
    console.log("beforeCreate");
  },
  setup() {
    // setup() 中的 this 是 undefined，Vue3 中已经弱化了 this。
    // 数据，原本写在 data() 中，此时的 name、age、tel 都非响应式数据。
    let name = "张三";
    let age = 18;
    let tel = "12345678901";

    // 方法
    function changeName() {
      name = "张三"; // 注意：这样修改 name 页面不会发生变化。
      console.log(name); // name 确实已更改，但却并非响应式。
    }

    function changeAge() {
      age += 1; // 注意：这样修改 age 页面不会发生变化。
      console.log(age); // age 确实已更改，但却并非响应式。
    }
    function showTel() {
      alert(tel);
    }

    // 将数据、方法返回，模板中才可以使用。
    return { name, age, changeName, changeAge, showTel };
  },
};
</script>

<style scoped>
.person {
  background-color: beige;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
