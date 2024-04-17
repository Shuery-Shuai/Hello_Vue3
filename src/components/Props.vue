<template>
  <div class="persons">
    <h1>Props 的使用</h1>
    <!-- <h2>{{ a }}</h2> -->
    <!-- <h2>{{ list }}</h2> -->
    <ul>
      <li v-for="person in list" :key="person.id">
        {{ person.name }} -- {{ person.age }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { type Persons } from "@/types";

// 接收 a 与 list
// defineProps(["a", "list"]);
// 接收 list 并限制其类型
// defineProps<{ list: Persons }>();
// 接收 list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: "wu", name: "无", age: 0 }],
});
// 接受 a 并将其赋予 x
// let x = defineProps(["a"]);
</script>

<style scoped>
.persons {
  background-color: violet;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
