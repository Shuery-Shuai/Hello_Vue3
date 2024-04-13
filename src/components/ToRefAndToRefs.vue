<template>
  <div class="person">
    <h1>【toRefs()】与【toRef()】</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>电话：{{ person.tel }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeTel">修改电话</button>
  </div>
</template>

<script lang="ts" setup>
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
  background-color: magenta;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
