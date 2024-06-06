<template>
  <div class="topBar">
    <div class="title">Vue Messenger</div>
    <div class="action">
      <a v-if="userStore.user" @click.prevent="userStore.logout">LOGOUT</a>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>

<style scoped>
.topBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
}
.title {
  font-size: xx-large;
  font-weight: bold;
  background: linear-gradient(10deg, #5b5b5b, #a3a3a3, #5b5b5b);
  filter: drop-shadow(2px 2px 2px black);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.action {
  cursor: pointer;
}
a {
  padding: 4px;
  font-size: 20px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #ff000070;
  color: #e0e0e0;
  filter: drop-shadow(2px 2px black);
  transition: all 250ms;
}
a:visited {
  color: #e0e0e0;
}
a:hover {
  background-color: #e31b1b;
  color: #e0e0e0;
}

@media (max-width: 500px) {
  .topBar {
    padding: 5px 10px 5px 10px;
  }
  .title {
    font-size: x-large;
    filter: drop-shadow(2px 2px #000000);
    font-weight: 700;
  }
  .action {
    font-size: medium;
  }
  a {
    font-weight: 600;
    font-size: large;
    padding: 1px;
    border: none;
    color: #ff5555;
    background-color: transparent;
  }
}
</style>
