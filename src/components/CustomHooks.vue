<template>
  <div class="app">
    <h1>自定义 Hooks</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我 SUM 加一</button>
    <button @click="bigSum">点我 SUM 乘十</button>
    <hr />
    <img
      v-for="(dog, index) in dogList"
      :src="dog"
      :alt="dog"
      :key="index"
    /><br />
    <button @click="getDog">再来一只 U•ェ•*U 狗🐕</button>
  </div>
</template>

<script setup lang="ts">
import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";

const { sum, add, bigSum } = useSum();
const { dogList, getDog } = useDog();
</script>

<style scoped>
.app {
  background-color: yellow;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
li {
  font-size: 1rem;
}
img {
  height: 10rem;
  margin: 0 1rem;
}
</style>
