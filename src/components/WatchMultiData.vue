<template>
  <div class="person">
    <h1>监视多个数据</h1>
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

// 监视，监视多个数据。
// 注意：此处直接监视 person.car 只是为了说明数组中能够存在对象而不只是函数，此时当替换整个 person.car 对象后监视将失效。
watch(
  [() => person.name, person.car],
  (newValue, oldValue) => {
    console.log("Person.Car 变化了", newValue, oldValue);
  },
  { deep: true }
);
</script>

<style scoped>
.person {
  background-color: palegoldenrod;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
