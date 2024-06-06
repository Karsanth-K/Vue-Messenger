import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBr9xFZmRZ1dp1MKw-N3qPGrT9YKPZs1RM',
  authDomain: 'vue-messenger-51d02.firebaseapp.com',
  projectId: 'vue-messenger-51d02',
  storageBucket: 'vue-messenger-51d02.appspot.com',
  messagingSenderId: '963744296776',
  appId: '1:963744296776:web:7b022d559d070a3d4a8d7d',
  measurementId: 'G-1GTG5RR20D'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth()

export { db, auth }
