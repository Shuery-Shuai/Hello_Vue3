<template>
  <div class="test">
    <h1>【setup()】与【选项式 API】</h1>
    <h2>测试 1：{{ a }}</h2>
    <h2>测试 2：{{ c }}</h2>
    <h2>测试 3：{{ d }}</h2>
    <button @click="b">测试</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "SetupVsOptionsAPI",
  // Vue2 中的语法依然能够在 Vue3 中使用，但是 setup() 中的数据无法在 data() 及 methods 中使用，而反过来却可以。原因为 setup() 加载在 data() 与 methods 之前。
  data() {
    return {
      a: 100,
      c: this.name,
      d: 900,
    };
  },
  methods: {
    b() {
      console.log("b");
    },
  },
};
</script>

<style scoped>
.test {
  background-color: firebrick;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
