<template>
  <div class="sum">
    <h1>监视【ref()】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我和加一</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

let sum = ref(0);

function changeSum() {
  sum.value += 1;
}

// 监视，监视【ref()】定义的【基本类型】数据。
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log("SUM 变化了", newValue, oldValue);
  // 当 SUM 的值大于等于 10 时停止监视。
  if (newValue >= 10) {
    stopWatch();
  }
});
</script>

<style scoped>
.sum {
  background-color: gainsboro;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
