import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification'

const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(ToastPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
