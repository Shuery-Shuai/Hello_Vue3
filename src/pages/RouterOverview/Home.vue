<template>
  <div class="home">
    <img
      src="https://api.star-history.com/svg?repos=LetsShareAll/Profiles_for_Clash&type=Date"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// onMounted(() => {
//   setTimeout(() => {
//     router.push("/news");
//   }, 3000);
// });
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
