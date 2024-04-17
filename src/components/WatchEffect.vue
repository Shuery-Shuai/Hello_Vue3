<template>
  <div class="situation">
    <h1>【watchEffect】监视多个数据</h1>
    <h2>需求：当水温达到 60℃ 或水位达到 80cm 时给服务器发送请求。</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温加十</button>
    <button @click="changeHeight">水位加十</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";

let temp = ref(10);
let height = ref(0);

function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}

// 监视，使用 watch 实现。
watch([temp, height], (value) => {
  // 从 value 中获取最新的水温（newTemp）及最新的水位（newHeight）。
  let [newTemp, newHeight] = value;
  // 逻辑
  if (newTemp >= 60 || newHeight >= 80) {
    console.log("给服务器发送请求");
  }
});
// 监视，watchEffect 实现。
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log("给服务器发送请求。");
  }
});
</script>

<style scoped>
.situation {
  background-color: rebeccapurple;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
