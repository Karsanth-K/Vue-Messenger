<template>
  <div class="logView">
    <h1 class="title">Sign up</h1>
    <form class="logForm">
      <div class="inputField">
        <input
          @focus="changeTo(true, 'username')"
          @focusout="changeTo(false, 'username')"
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
          @focus="changeTo(true, 'email')"
          @focusout="changeTo(false, 'email')"
          ref="emailRef"
          v-model="email"
          type="email"
          class="input"
          id="email"
        />
        <label :class="emailFocusOrHasInput ? 'focused' : ''" for="email">Email</label>
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
      <div class="inputField">
        <input
          @focus="changeTo(true, 'cnfrmPass')"
          @focusout="changeTo(false, 'cnfrmPass')"
          ref="cnfrmPassRef"
          v-model="cnfrmPass"
          type="password"
          class="input"
          id="cnfrmPass"
        />
        <label :class="cnfrmPassFocusOrHasInput ? 'focused' : ''" for="cnfrmPass"
          >Confirm Password</label
        >
      </div>
      <button type="submit" @click.prevent="signupFunction">SIGNUP</button>
    </form>
    <div class="logOptions">
      <img src="../img/google.webp" alt="img" />
      <img src="../img/facebook.png" alt="img" />
      <img src="../img/github.png" alt="img" />
    </div>
  </div>
  <RouterLink to="/login">
    <p>Already have an account? Login here!</p>
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
const email = ref('')
const password = ref('')
const cnfrmPass = ref('')

//references for input components
const usernameRef = ref(null)
const emailRef = ref(null)
const passwordRef = ref(null)
const cnfrmPassRef = ref(null)

//input focus or has input
const usernameFocusOrHasInput = ref(false)
const emailFocusOrHasInput = ref(false)
const passwordFocusOrHasInput = ref(false)
const cnfrmPassFocusOrHasInput = ref(false)

//set input focus or has input (or) focusOut
function changeTo(val, ele) {
  if (ele === 'username') {
    if (!val && username.value) return
    usernameFocusOrHasInput.value = val
  } else if (ele === 'email') {
    if (!val && email.value) return
    emailFocusOrHasInput.value = val
  } else if (ele === 'password') {
    if (!val && password.value) return
    passwordFocusOrHasInput.value = val
  } else {
    if (!val && cnfrmPass.value) return
    cnfrmPassFocusOrHasInput.value = val
  }
}

//signup function
const signupFunction = () => {
  const isValid = userStore.checkCredentials([
    email.value,
    password.value,
    cnfrmPass.value,
    username.value
  ])
  if (isValid) {
    userStore.signup(email.value, username.value, password.value)
  }
}
</script>

<style scoped>
.logView {
  margin-top: 10px;
}
.logForm > .inputField > .focused {
  font-size: smaller;
  top: -21px;
  background-color: #26262650;
  padding: 2px 5px 2px 5px;
  border-radius: 10px 10px 0 0;
}
.logForm {
  gap: 30px;
}
.logForm > button {
  margin-top: 10px;
  margin-bottom: 15px;
}
.logView > .title {
  margin: 10px auto 10px auto;
}
@media (max-width: 500px) {
  .logView > .title {
    margin: auto;
  }
  .logForm > .inputField > .focused {
    font-size: xx-small;
    top: -16px;
  }
  .logForm > button {
    margin: auto;
  }
}
</style>
