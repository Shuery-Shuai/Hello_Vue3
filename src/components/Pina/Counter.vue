<template>
  <div class="counter">
    <h2>当前求和为：{{ counterStore.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/store/counter";

const counterStore = useCounterStore();
// 以下两种方式皆可获取 state
// console.log(counterStore.sum);
// console.log(counterStore.$state.sum);

let n = ref(1); // 用户选择的数字

function add() {}
function minus() {}
</script>

<style scoped>
.counter {
  background-color: blanchedalmond;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
select,
button {
  margin: 1 5px;
  height: 2rem;
}
</style>
