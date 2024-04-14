<template>
  <div class="person">
    <h1>监视【ref()】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">换人</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

let person = ref({
  name: "张三",
  age: 18,
});

function changeName() {
  person.value.name += ".";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = { name: "李四", age: 22 };
}

// 监视，监视【ref()】定义的【对象类型】数据的地址值。若想监视对象内部属性的变化，需手动开启深度监视。
// watch 的第一个参数时：被监视的数据。
// watch 的第二个参数时：坚实的回调。
// watch 的第三个参数时：配置对象（deep、immediate 等等）。
watch(
  person,
  (newValue, oldValue) => {
    console.log("Person 变化了", newValue, oldValue);
  },
  { deep: true }
);
</script>

<style scoped>
.person {
  background-color: honeydew;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
