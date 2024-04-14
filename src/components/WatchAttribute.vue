<template>
  <div class="person">
    <h1>监视【ref()】或【reactive()】定义的【对象类型】数据的某一属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCar1">换车一</button>
    <button @click="changeCar2">换车二</button>
    <button @click="changeCar">换车</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "小米",
    c2: "比亚迪",
  },
});

function changeName() {
  person.name += ".";
}
function changeAge() {
  person.age += 1;
}
function changeCar1() {
  person.car.c1 = "华为";
}
function changeCar2() {
  person.car.c2 = "极氪";
}
function changeCar() {
  person.car = { c1: "奔驰", c2: "宝马" };
}

// 监视，监视响应式对象数据的某个属性，且该属性是基本类型时，要写成函数式。
watch(
  () => person.name,
  (newValue, oldValue) => {
    console.log("Person.Name 变化了", newValue, oldValue);
  }
);
// 能够直接监视对象中的对象，但依然建议写函数式。
// 当直接监视对象时，只监视对象中的对象中的属性；当使用函数式且加上 deep: true 时，对象中某一属性与整个对象都能监视。
// 结论：监视的要是对象中的属性，最好写函数式。注意：若是对象监视的地址值时，需要关注内部，需要手动开启深度监视。
watch(
  () => person.car,
  (newValue, oldValue) => {
    console.log("Person.Car 变化了", newValue, oldValue);
  },
  { deep: true }
);
</script>

<style scoped>
.person {
  background-color: oldlace;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
