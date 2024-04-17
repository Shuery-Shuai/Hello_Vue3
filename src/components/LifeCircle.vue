<template>
  <div class="sum">
    <h1>生命周期</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我 SUM 加一</button>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

let sum = ref(0);

function add() {
  sum.value++;
}

// 创建
console.log("创建");

// 挂载
onBeforeMount(() => {
  console.log("挂载之前");
});
onMounted(() => {
  console.log("子——挂载完毕");
});

// 更新
onBeforeUpdate(() => {
  console.log("更新之前");
});
onUpdated(() => {
  console.log("更新完毕");
});

// 卸载
onBeforeUnmount(() => {
  console.log("卸载之前");
});
onUnmounted(() => {
  console.log("卸载完毕");
});
</script>

<style scoped>
.sum {
  background-color: wheat;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
