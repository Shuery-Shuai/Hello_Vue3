<template>
  <div class="person">
    <!-- 使用 ref 中的 {{ thing }} 时无需加 value 如 {{ thing.value }}，Vue 会自动处理。 -->
    <!-- <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button> -->
    <!-- <hr />
    <h2>测试 1：{{ a }}</h2>
    <h2>测试 2：{{ c }}</h2>
    <h2>测试 3：{{ d }}</h2>
    <button @click="b">测试</button> -->
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>电话：{{ person.tel }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeTel">修改电话</button>
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
// import { ref } from "vue";

// // 数据，原本写在 data() 中，此时的 name、age、tel 都非响应式数据。
// let name = ref("张三");
// let age = ref(18);
// let tel = "12345678901";
// let address = "北京市朝阳社区";

// // 方法
// function changeName() {
//   name.value = "Zhang San"; // 注意：这样修改 name 页面不会发生变化。
//   console.log(name); // name 确实已更改，但却并非响应式。
// }

// function changeAge() {
//   age.value += 1; // 注意：这样修改 age 页面不会发生变化。
//   console.log(age); // age 确实已更改，但却并非响应式。
// }
// function showTel() {
//   alert(tel);
// }
import { reactive, toRefs, toRef } from "vue";

let person = reactive({ name: "张三", age: 18, tel: "12345678901" });

// 利用 toRefs() 解构响应式数据，即将 reactive() 对象数据中的每一键值赋予另一新定义 ref() 变量并将其与原本数据中的键值绑定，类似于指针。
let { name, age } = toRefs(person);
// toRef() 则单独处理某一键值。
let tel = toRef(person, "tel");

function changeName() {
  name.value += ".";
  console.log(name.value, person.name);
}
function changeAge() {
  age.value += 1;
}
function changeTel() {
  tel.value = "14785236903";
  console.log(tel.value, person.tel);
}
</script>
<style scoped>
.person {
  background-color: aliceblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
