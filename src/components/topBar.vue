<template>
  <div class="topBar">
    <div class="title">Vue Messenger</div>
    <div class="action">
      <router-link to="/login">LOGOUT</router-link>
    </div>
  </div>
</template>

<script setup></script>

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
  background: radial-gradient(#b1b1b1, #757575);
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
  border: 1px solid;
  border-radius: 5px;
  text-decoration: none;
  background-color: #51515170;
  border-color: #e0e0e0;
  color: #e0e0e0;
  transition: all 250ms;
}
a:visited {
  color: #e0e0e0;
}
a:hover {
  background-color: #e31b1b;
  border-color: #e0e0e0;
  color: #e0e0e0;
}

@media (max-width: 500px) {
  .topBar {
    padding: 5px 10px 5px 10px;
  }
  .title {
    font-size: x-large;
    color: #a0a0a0;
    filter: drop-shadow(1px 1px 1px #000000);
    text-shadow: -1px -1px 1px #676767;
    font-weight: 500;
  }
  .action {
    font-size: medium;
  }
  a {
    content: counter(increment);
    font-weight: 600;
    font-size: large;
    padding: 1px;
    border: none;
    color: #ff5555;
    background-color: transparent;
  }
}
</style>
