<template>
  <div class="person">
    <h1>【computed()】计算属性</h1>
    名：<input type="text" v-model="firstName" /><br />
    姓：<input type="text" v-model="lastName" /><br />
    全名：<span>{{ fullName }}</span
    ><br />
    <button @click="changeFullName">修改名字为 Si-Li</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

let firstName = ref("San");
let lastName = ref("Zhang");

// 这么定义的 fullName 为计算属性，且只读。
// let fullName = computed(() => {
//   return (
//     firstName.value.slice(0, 1).toUpperCase() +
//     firstName.value.slice(1) +
//     "-" +
//     lastName.value.slice(0, 1).toUpperCase() +
//     lastName.value.slice(1)
//   );
// });

// 这么定义的 fullName 为计算属性，可读可写。
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value.slice(0, 1).toUpperCase() +
      lastName.value.slice(1)
    );
  },
  set(val) {
    const [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
  },
});

function changeFullName() {
  fullName.value = "li-si";
}
</script>

<style scoped>
.person {
  background-color: navajowhite;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
