<template>
  <!-- HTML -->
  <div class="app">
    <h1>你好！Vue 3！</h1>
    <!-- <SimpleProject />
      <OptionsAPI />
      <SetupOverview />
      <SetupVsOptionsAPI />
      <SetupSugar />
      <RefBasic />
      <ReactiveObject />
      <RefObject />
      <RefVsReactive />
      <ToRefAndToRefs />
      <Computed /> -->
    <!-- <WatchRefBasic /> -->
    <!-- <WatchRefObject /> -->
    <!-- <WatchReactive /> -->
    <!-- <WatchAttribute /> -->
    <!-- <WatchMultiData /> -->
    <!-- <WatchEffect /> -->
    <!-- <TagRef ref="tagref" />
      <h3 ref="title3">Vue3 启航~~~</h3>
      <button @click="showLog">点我输出 H3 元素</button>
    <button @click="test">测试</button> -->
    <!-- <TypeScript /> -->
    <!-- <Props a="年龄" :list="personList" /> -->
    <!-- <LifeCircle v-if="isShow" />
    <button @click="showNot">{{ mountNot }}</button> -->
    <!-- <CustomHooks /> -->
    <RouterOverview />
    <!-- <Person />
    <Car />
    <Game /> -->
  </div>
</template>

<script lang="ts" setup>
// JS 或 TS
import { reactive, ref, onMounted } from "vue";
import { type Persons } from "@/types";
import SimpleProject from "./components/SimpleProject.vue";
import OptionsAPI from "./components/OptionsAPI.vue";
import SetupOverview from "./components/SetupOverview.vue";
import SetupVsOptionsAPI from "./components/SetupVsOptionsAPI.vue";
import SetupSugar from "./components/SetupSugar.vue";
import RefBasic from "./components/RefBasic.vue";
import ReactiveObject from "./components/ReactiveObject.vue";
import RefObject from "./components/RefObject.vue";
import RefVsReactive from "./components/RefVsReactive.vue";
import ToRefAndToRefs from "./components/ToRefAndToRefs.vue";
import Computed from "./components/Computed.vue";
import WatchRefBasic from "./components/WatchRefBasic.vue";
import WatchRefObject from "./components/WatchRefObject.vue";
import WatchReactive from "./components/WatchReactive.vue";
import WatchAttribute from "./components/WatchAttribute.vue";
import WatchMultiData from "./components/WatchMultiData.vue";
import WatchEffect from "./components/WatchEffect.vue";
import TagRef from "./components/TagRef.vue";
import TypeScript from "./components/TypeScript.vue";
import Props from "./components/Props.vue";
import LifeCircle from "./components/LifeCircle.vue";
import CustomHooks from "./components/CustomHooks.vue";
import RouterOverview from "./components/RouterOverview.vue";
import Person from "./components/Person.vue";
import Car from "./components/Car.vue";
import Game from "./components/Game.vue";

// let title3 = ref();
// let tagref = ref();
// let personList = reactive<Persons>([
//   { id: "zhangsan", name: "张三", age: 60 },
//   { id: "lisi", name: "李四", age: 50 },
//   { id: "wangwu", name: "王五", age: 40 },
// ]);
// let isShow = ref(true);
// let mountNot = ref("卸载");

// function showLog() {
//   console.log(title3.value);
// }
// function test() {
//   console.log(tagref.value);
// }
// function showNot() {
//   isShow.value = !isShow.value;
//   if (mountNot.value == "卸载") {
//     mountNot.value = "挂载";
//   } else if (mountNot.value == "挂载") {
//     mountNot.value = "卸载";
//   }
// }

// onMounted(() => {
//   console.log("父——挂载完毕");
// });
</script>

<style>
/* 样式 */
.app {
  background-color: aliceblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
