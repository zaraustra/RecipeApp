import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3FldSSK7ssFKDJ_IzrYGyUywrcP-FEBI',
  authDomain: 'recipeapp-7c1c2.firebaseapp.com',
  projectId: 'recipeapp-7c1c2',
  storageBucket: 'recipeapp-7c1c2.appspot.com',
  messagingSenderId: '57343942066',
  appId: '1:57343942066:web:4f3e7be1e7ee4f358a98ab',
  measurementId: 'G-KS21YQML4R'
}

let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}
const auth = firebase.auth()

export { auth }
