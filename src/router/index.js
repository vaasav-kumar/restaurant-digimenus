import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/analytics'

import Dashboard from '../pages/Home'
import Menus from '../pages/Menus'

import Header from '../components/Header'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Dashboard, meta: { title: 'Scan QR' } },
    { path: '/:id', name: 'Menus', components: {default: Header, section: Menus}, meta: { title: 'Restaurant Menus' } }
  ]
})

router.afterEach((to, from) => {
  firebase.analytics().logEvent('enter_page', {from: from.meta.title, to: to.meta.title})
})

export default router
