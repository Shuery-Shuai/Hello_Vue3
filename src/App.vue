<template>
  <!-- HTML -->
  <Person />
  <Car />
</template>

<script lang="ts">
// JS 或 TS
import Person from "./components/Person.vue";
import Car from "./components/Car.vue";

export default {
  name: "App", // 组件名
  components: { Person, Car }, // 注册组件
};
</script>

<style>
/* 样式 */
</style>
