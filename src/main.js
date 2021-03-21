import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 520,
    tablet: 720,
    desktop: Infinity
  },
  defaultBreakpoint: 'desktop'
})

const firebaseConfig = {
  apiKey: 'AIzaSyBxJa6whnookijG8wST8fLnbQ_gemqs9vI',
  authDomain: 'digital-menu-44bb9.firebaseapp.com',
  databaseURL: 'https://digital-menu-44bb9-default-rtdb.firebaseio.com',
  projectId: 'digital-menu-44bb9',
  storageBucket: 'digital-menu-44bb9.appspot.com',
  messagingSenderId: '579050242937',
  appId: '1:579050242937:web:1c1d67343a7bd1012825a8',
  measurementId: 'G-MRP9G5SB9H'
}
firebase.initializeApp(firebaseConfig)

Vue.prototype.$db = firebase.firestore()
Vue.prototype.$auth = firebase.auth()
Vue.prototype.$analytics = firebase.analytics()

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
