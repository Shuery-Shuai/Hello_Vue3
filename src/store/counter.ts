import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // actions 里放置一个个方法，用于响应组件中的“动作”
  actions: {
    increment(value) {
      // 修改数据
      this.sum += value;
    },
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 6,
      school: "Vue3",
      address: "Pinia",
    };
  },
});
