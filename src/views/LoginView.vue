<template>
  <div class="logView">
    <h1 class="title">Login</h1>
    <form class="logForm">
      <div class="inputField">
        <input
          @focus="changeTo(true, 'username')"
          @focusout="changeTo(false, 'username')"
          ref="usernameRef"
          v-model="username"
          type="email"
          class="input"
          id="username"
        />
        <label :class="usernameFocusOrHasInput ? 'focused' : ''" for="username">Email</label>
      </div>
      <div class="inputField">
        <input
          @focus="changeTo(true, 'password')"
          @focusout="changeTo(false, 'password')"
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
    <div class="logOptions">
      <img src="../img/google.webp" alt="img" />
      <img src="../img/facebook.png" alt="img" />
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
import { useUserStore } from '@/stores/userStore'

//router
const router = useRouter()

//stores
const userStore = useUserStore()

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
function changeTo(val, ele) {
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
  const isValid = userStore.checkCredentials([username.value, password.value])
  if (isValid) {
    userStore.login(username.value, password.value)
  }
}
</script>
