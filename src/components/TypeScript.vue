<template>
  <div class="person">
    <h1>回顾 TypeScript 中的接口、泛型、自定义类型</h1>
  </div>
</template>

<script setup lang="ts">
import { type PersonInter, type Persons } from "@/types";

// let person: PersonInter = { id: 'zhangsan', name: '张三', age: 60 }
let personList: Persons = [
  { id: "zhangsan", name: "张三", age: 60 },
  { id: "lisi", name: "李四", age: 50 },
  { id: "wangwu", name: "王五", age: 40 },
];
</script>

<style scoped>
.person {
  background-color: tan;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
