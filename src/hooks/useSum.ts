import { onMounted, ref } from "vue";

export default function () {
  let sum = ref(0);

  function add() {
    sum.value++;
  }
  function bigSum() {
    sum.value = 10 * sum.value;
  }

  onMounted(() => {
    add();
  });

  return { sum, add, bigSum };
}
