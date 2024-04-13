<template>
  <div class="car">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万。</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr />
    <h2>购买数量：{{ sum }}</h2>
    <button @click="changeSum">数量加一</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// ref() 定义响应式对象，其底层仍是 reactive()。
let car = ref({ brand: "小米", price: 19.8 });
let sum = ref(0);

function changePrice() {
  car.value.price += 10;
}
function changeCar() {
  // ref() 能够对数据整体进行更改，原因在修改的是变量的 value。
  car.value = { brand: "比亚迪", price: 7.8 };
}
function changeSum() {
  // 将 ref() 赋给 ref() 变量无法更新页面数据。
  // sum = ref(9);
  sum.value += 1;
}
</script>

<style scoped>
.car {
  background-color: beige;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
