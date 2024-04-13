<template>
  <div class="person">
    <h1>一个简单的示例</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "SimpleProject",
  data() {
    return {
      name: "张三",
      age: 18,
      tel: "12345678901",
    };
  },
  methods: {
    showTel() {
      alert(this.tel);
    },
  },
};
</script>

<style scoped>
.person {
  background-color: beige;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
