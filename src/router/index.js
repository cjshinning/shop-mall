import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from './../views/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods/:id/user/:name',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
