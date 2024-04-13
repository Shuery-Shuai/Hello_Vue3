<template>
  <div class="game">
    <h1>【ref()】与【reactive()】的区别</h1>
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万。</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr />
    <h2>购买数量：{{ sum }}</h2>
    <button @click="changeSum">数量加一</button>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeSecondGame">修改第二个游戏的名字</button>
    <button @click="changeGameList">修改游戏列表</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

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

let games = reactive([
  { id: "genshin", name: "原神" },
  { id: "starrail", name: "星穹铁道" },
  { id: "zzz", name: "绝区零" },
]);

function changeSecondGame() {
  games[1] = { id: "honkai", name: "崩坏" };
}
function changeGameList() {
  // reactive() 直接修改整个数据不更新。
  // games = [
  //   { id: "wzry", name: "王者荣耀" },
  //   { id: "hpjy", name: "和平精英" },
  // ];
  // 即使将 reactive() 再次赋给变量也无法更新。
  // games = reactive([
  //   { id: "wzry", name: "王者荣耀" },
  //   { id: "hpjy", name: "和平精英" },
  // ]);
  Object.assign(games, [
    { id: "wzry", name: "王者荣耀" },
    { id: "hpjy", name: "和平精英" },
  ]);
}
</script>

<style scoped>
.game {
  background-color: lavender;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
