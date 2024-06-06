import { db, auth } from '@/database/firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'

import { defineStore } from 'pinia'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const $toast = useToast()

function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  return regex.test(email)
}

export const useUserStore = defineStore({
  id: 'methods',
  state: () => {
    return {
      user: null
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.username = user.displayName
          this.user.email = user.email
        } else {
          this.user = {}
        }
      })
    },
    checkCredentials(credentials) {
      for (let property of credentials) {
        if (!property.length) {
          $toast.warning('username and password cannot be empty', {
            position: 'top',
            draggable: true
          })
          return false
        }
        if (property.length < 5) {
          $toast.warning('username and password must at least be 5 characters', {
            position: 'top',
            draggable: true
          })
          return false
        }
      }
      if (credentials[2] && credentials[1] !== credentials[2]) {
        $toast.warning('Passwords do not match', {
          position: 'top',
          draggable: true
        })
        return false
      }
      if (!isValidEmail(credentials[0])) {
        $toast.warning('Invalid email', {
          position: 'top',
          draggable: true
        })
        return false
      }
      return true
    },
    async signup(email, username, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          this.user = {
            id: user.user.uid,
            username,
            email: user.user.email
          }
          updateProfile(auth.currentUser, {
            displayName: username
          }).catch((err) => {
            $toast.error('An error occurred while setting the username', err.message)
          })
        })
        .then(() => {
          $toast.success('Account created successfully', {
            position: 'top',
            draggable: true,
            onDismiss: () => {
              this.router.replace('/')
              $toast.success(`Welcome ${this.user.username}`)
            }
          })
        })
        .catch((err) => {
          if (err.message === 'Firebase: Error (auth/email-already-in-use).')
            $toast.error('Email already exists!', {
              position: 'top',
              draggable: true
            })
          else
            $toast.error(err.message, {
              position: 'top',
              draggable: true
            })
        })
    },
    async login(username, password) {
      signInWithEmailAndPassword(auth, username, password)
        .then((user) => {
          this.user = {
            id: user.user.uid,
            username: user.user.displayName,
            email: user.user.email
          }
          this.router.push('/')
          $toast.success(`Welcome ${this.user.username}`, {
            position: 'top',
            draggable: true
          })
        })
        .catch((err) => {
          if (err.message === 'Firebase: Error (auth/invalid-credential).')
            $toast.error('Invalid Credentials', {
              position: 'top',
              draggable: true
            })
          else
            $toast.error(err.message, {
              position: 'top',
              draggable: true
            })
        })
    },
    async logout() {
      signOut(auth)
        .then(() => {
          this.user = null
          this.router.replace('/login')
          $toast.success('Logged out successfully', {
            position: 'top',
            draggable: true
          })
        })
        .catch((error) => {
          $toast.error(error.message, {
            position: 'top',
            draggable: true
          })
        })
    }
  }
})
