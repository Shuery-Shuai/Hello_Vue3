<template>
  <div class="game">
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeSecondGame">修改第二个游戏的名字</button>
    <button @click="changeGameList">修改游戏列表</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

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
  background-color: cadetblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
