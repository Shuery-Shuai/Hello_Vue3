<template>
  <div class="person">
    <h1>【选项式 API】</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "OptionsAPI",
  data() {
    return {
      name: "张三",
      age: 18,
      tel: "12345678901",
    };
  },
  methods: {
    changeName() {
      this.name = "Zhang San";
    },
    changeAge() {
      this.age += 1;
    },
    showTel() {
      alert(this.tel);
    },
  },
};
</script>

<style scoped>
.person {
  background-color: cadetblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
