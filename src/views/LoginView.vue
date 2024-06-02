<template>
  <div class="loginView">
    <h1 class="title">Login</h1>
    <form class="loginForm">
      <div class="inputField">
        <input
          @focus="changeTo($event, true, 'username')"
          @focusout="changeTo($event, false, 'username')"
          ref="usernameRef"
          v-model="username"
          type="text"
          class="input"
          id="username"
        />
        <label :class="usernameFocusOrHasInput ? 'focused' : ''" for="username">Username</label>
      </div>
      <div class="inputField">
        <input
          @focus="changeTo($event, true, 'password')"
          @focusout="changeTo($event, false, 'password')"
          ref="passwordRef"
          v-model="password"
          type="password"
          class="input"
          id="password"
        />
        <label :class="passwordFocusOrHasInput ? 'focused' : ''" for="password">Password</label>
      </div>
      <button type="submit" @click.prevent="loginFunction">LOGIN</button>
    </form>
    <div class="loginOptions">
      <img src="../img/google.webp" alt="img" />
      <img src="../img/facebook.webp" alt="img" />
      <img src="../img/github.png" alt="img" />
    </div>
  </div>
  <RouterLink to="/signup">
    <p>Don't have an account? Register here!</p>
  </RouterLink>
</template>

<script setup>
//imports
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMethodStore } from '@/stores/methodStore'

//router
const router = useRouter()

//stores
const methodStore = useMethodStore()

//username and password values
const username = ref('')
const password = ref('')

//references for input components
const usernameRef = ref(null)
const passwordRef = ref(null)

//input focus or has input
const usernameFocusOrHasInput = ref(false)
const passwordFocusOrHasInput = ref(false)

//set input focus or has input (or) focusOut
function changeTo(event, val, ele) {
  if (ele === 'username') {
    if (!val && username.value) return
    usernameFocusOrHasInput.value = val
  } else if (ele === 'password') {
    if (!val && password.value) return
    passwordFocusOrHasInput.value = val
  }
}

//login function
const loginFunction = () => {
  const isValid = methodStore.checkCredentials(username.value, password.value)
  if (isValid) {
    //methodStore.login(username.value, password.value)
    router.push('/')
  }
}
</script>

<style scoped>
.loginView {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 400px;
  height: 500px;
  margin: auto;
  margin-top: 50px;
  background: #0000003e;
  border-radius: 10px;
  border: 2px solid #28000067;
  outline: 2px solid #280000;
  outline-offset: 1px;
  padding: 10px;
  backdrop-filter: blur(15px);
}
.loginForm {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 20px;
}
.loginView > .title {
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 10px 2px;
  width: fit-content;
  margin: 10px auto 25px auto;
  background: radial-gradient(#d7d7d7, #8f8f8f);
  filter: drop-shadow(3px 3px 1px black);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: animateTitle 2s infinite;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.inputField {
  width: fit-content;
  position: relative;
  margin: auto;
}
.inputField > label {
  position: absolute;
  left: 50%;
  top: 20%;
  translate: -50%;
  font-weight: 500;
  transition: all 500ms;
  color: #c0c0c0;
  text-shadow: 1px 1px 1px black;
}
.inputField > input {
  border-radius: 10px;
  width: 275px;
  height: 30px;
  border: none;
  outline-offset: 2px;
  outline: none;
  padding: 5px 10px;
  background: #26262693;
  color: #c0c0c0;
  text-shadow: 1px 1px 1px black;
  box-shadow: 2px 2px 2px black;
}
.inputField > .focused {
  left: 10px;
  translate: 0;
  top: -25px;
}
.loginForm > button {
  width: 150px;
  background-color: #27272752;
  color: #c0c0c0;
  font-size: large;
  cursor: pointer;
  border: none;
  box-shadow: 2px 2px 2px black;
  filter: drop-shadow(2px 2px black);
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  margin: auto;
  margin-top: -10px;
  margin-bottom: 20px;
  transition: all 500ms;
}
.loginForm > button:hover {
  background-color: #26262690;
  color: #f0f0f0;
}
.loginOptions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}
.loginOptions > img {
  width: 50px;
  background-color: #70707052;
  filter: drop-shadow(3px 3px black);
  border-radius: 50%;
  box-shadow: 2px 2px 2px black;
  transition: all 500ms;
}
.loginOptions > img:hover {
  scale: 1.1;
  box-shadow: 4px 4px 4px black;
}
a > p {
  margin: 20px auto;
  width: fit-content;
}

@media (max-width: 500px) {
  .loginView {
    max-width: 275px;
    width: auto;
    height: 330px;
  }
  .loginView > .title {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .loginForm {
    gap: 40px;
    margin-top: 30px;
  }
  .inputField > input {
    width: 200px;
    height: 20px;
    padding: 3px 5px;
  }
  .inputField > .focused {
    top: -13px;
    background: #2f2f2f93;
    text-shadow: 1px 1px black;
    font-size: 10px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px 5px 0 0;
  }
  .inputField > label {
    font-weight: 300;
    text-shadow: none;
    top: 10%;
  }
  .loginForm > button {
    width: 100px;
    padding: 5px 10px 5px 10px;
    margin: auto;
    margin-bottom: 10px;
  }
  .loginOptions {
    gap: 20px;
  }
  .loginOptions > img {
    filter: drop-shadow(1px 1px black);
    width: 30px;
  }
}
</style>
