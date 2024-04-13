<template>
  <div class="car">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万。</h2>
    <button @click="changePrice">修改汽车的价格</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// ref() 定义响应式对象，其底层仍是 reactive()。
let car = ref({ brand: "小米", price: 19.8 });

function changePrice() {
  car.value.price += 10;
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
