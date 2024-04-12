<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <!-- <hr />
    <h2>测试 1：{{ a }}</h2>
    <h2>测试 2：{{ c }}</h2>
    <h2>测试 3：{{ d }}</h2>
    <button @click="b">测试</button> -->
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: "Person",
  beforeCreate() {
    console.log("beforeCreate");
  },
  // Vue2 中的语法依然能够在 Vue3 中使用，但是 setup() 中的数据无法在 data() 及 methods 中使用，而反过来却可以。原因为 setup() 加载在 data() 与 methods 之前。
  // data() {
  //   return {
  //     a: 100,
  //     c: this.name,
  //     d: 900,
  //   };
  // },
  // methods: {
  //   b() {
  //     console.log("b");
  //   },
  // },
  setup() {
    // setup() 中的 this 是 undefined，Vue3 中已经弱化了 this。

    // 将数据、方法返回，模板中才可以使用。
    return { name, age, changeName, changeAge, showTel };

    // setup() 的返回值也可以是一个渲染函数。
    // return () => "23333333!!!";
  },
};
</script> -->

<script lang="ts" setup name="Person">
// 数据，原本写在 data() 中，此时的 name、age、tel 都非响应式数据。
let name = "张三";
let age = 18;
let tel = "12345678901";
let address = "北京市朝阳社区";

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
</script>
<style scoped>
.person {
  background-color: beige;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
