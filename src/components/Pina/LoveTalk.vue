<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";
import { useTalkStore } from "@/store/loveTalk";

const talkStore = useTalkStore();

async function getTalk() {
  // 发送请求，连续解构赋值
  let {
    data: { content },
  } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  // 把请求回来的字符串包装成一个对象
  let obj = { id: nanoid(), content };
  talkStore.talkList.unshift(obj);
}
</script>

<style scoped>
.talk {
  background-color: antiquewhite;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
