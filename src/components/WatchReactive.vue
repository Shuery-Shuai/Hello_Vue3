<template>
  <div class="person">
    <h1>监视【reactive()】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">换人</button>
    <hr />
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改 OBJ.A.B.C</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

let person = reactive({
  name: "张三",
  age: 18,
});
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});

function changeName() {
  person.name += ".";
}
function changeAge() {
  person.age += 1;
}
function changePerson() {
  Object.assign(person, { name: "李四", age: 22 });
}
function test() {
  obj.a.b.c = 999;
}

// 监视，监视【reactive()】定义的【对象类型】数据的地址值，且默认开启深度监视并无法关闭。
watch(person, (newValue, oldValue) => {
  console.log("Person 变化了", newValue, oldValue);
});
watch(obj, (newValue, oldValue) => {
  console.log("OBJ 变化了", newValue, oldValue);
});
</script>

<style scoped>
.person {
  background-color: indianred;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
