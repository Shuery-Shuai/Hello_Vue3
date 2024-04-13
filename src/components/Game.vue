<template>
  <div class="game">
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeSecondGame">修改第二个游戏的名字</button>
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
</script>

<style scoped>
.game {
  background-color: cadetblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
