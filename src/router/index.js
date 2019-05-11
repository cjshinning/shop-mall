import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from './../views/GoodsList'
import Title from './../views/Title'
import Image from './../views/Image'
import Cart from './../views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children: [
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
