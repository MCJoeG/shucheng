import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '../views/ebook/index.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      component: Ebook,
      children: [
        {
          path: ':fileName',
          component: () => import('../components/EbookReader.vue')
        }
      ]
    }
  ]
})
