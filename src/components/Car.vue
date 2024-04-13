<template>
  <div class="car">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万。</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <hr />
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeSecondGame">修改第二个游戏的名字</button>
    <hr />
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeC">修改值</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

let car = reactive({ brand: "小米", price: 19.8 });
let games = reactive([
  { id: "genshin", name: "原神" },
  { id: "starrail", name: "星穹铁道" },
  { id: "zzz", name: "绝区零" },
]);
let obj = reactive({ a: { b: { c: 666 } } });

function changePrice() {
  car.price += 10;
}
function changeSecondGame() {
  games[1] = { id: "honkai", name: "崩坏" };
}
function changeC() {
  obj.a.b.c = 999;
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
