import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMethodStore = defineStore({
  id: 'methods',
  state: () => {
    return {}
  },
  actions: {
    checkCredentials(username, password) {
      if (!username || !password) {
        alert('username and password cannot be empty')
        return false
      }
      if (username.length < 5) {
        alert('username must at least be 5 characters')
        return false
      }
      if (password.length < 5) {
        alert('password must at least be 5 characters')
        return false
      }
      return true
    }
  }
})
