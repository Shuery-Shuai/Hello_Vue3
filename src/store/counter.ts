import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // 真正存储数据的地方
  state() {
    return {
      sum: 6,
    };
  },
});
