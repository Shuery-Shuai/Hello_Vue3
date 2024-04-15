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
    <WatchMultiData />
    <!-- <Person />
    <Car />
    <Game /> -->
  </div>
</template>

<script lang="ts">
// JS 或 TS
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
import Person from "./components/Person.vue";
import Car from "./components/Car.vue";
import Game from "./components/Game.vue";

export default {
  name: "App", // 组件名
  components: {
    SimpleProject,
    OptionsAPI,
    SetupOverview,
    SetupVsOptionsAPI,
    SetupSugar,
    RefBasic,
    ReactiveObject,
    RefObject,
    RefVsReactive,
    ToRefAndToRefs,
    Computed,
    WatchRefBasic,
    WatchRefObject,
    WatchReactive,
    WatchAttribute,
    WatchMultiData,
    Person,
    Car,
    Game,
  }, // 注册组件
};
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
