<template>
  <div class="address">
    <h1>标签的 Ref 属性</h1>
    <h2>中国</h2>
    <h3 ref="title3">江西</h3>
    <h4>南昌</h4>
    <button @click="showLog">点我输出 H3 元素</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 创建一个 title3，用于存储 ref 标记的内容。
let title3 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
  console.log(title3.value);
}

defineExpose({ a, b, c });
</script>

<style scoped>
.address {
  background-color: saddlebrown;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
