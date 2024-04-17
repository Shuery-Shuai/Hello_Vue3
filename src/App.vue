<template>
  <!-- HTML -->
  <div class="app">
    <h1>你好！Vue 3！</h1>
    <h3 ref="title3">Vue3 启航~~~</h3>
    <button @click="showLog">点我输出 H3 元素</button>
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
    <TagRef ref="tagref" />
    <button @click="test">测试</button>
    <!-- <Person />
    <Car />
    <Game /> -->
  </div>
</template>

<script lang="ts" setup>
// JS 或 TS
import { ref } from "vue";
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
import Person from "./components/Person.vue";
import Car from "./components/Car.vue";
import Game from "./components/Game.vue";

let title3 = ref();
let tagref = ref();

function showLog() {
  console.log(title3.value);
}
function test() {
  console.log(tagref.value);
}
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
