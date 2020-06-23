// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Member from '../components/Member.vue'
import Etc from '../components/Etc.vue'
import NotFound from '../components/NotFound.vue'

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/member', component: Member },
    { path: '/etc', component: Etc },
    { path: '*', component: NotFound }
  ]
})

export default router
