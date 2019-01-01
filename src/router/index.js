import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/fronted/homepage'
import resume from '@/components/fronted/resume'
import articlesMore from '@/components/fronted/articlesMore'
import numbling from '@/components/fronted/numbling'
import categorylist from '@/components/fronted/categorylist'

Vue.use(Router)

const router = new Router({
  //mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/categorylist',
      name: 'categorylist',
      component: categorylist
    },
    {
      path: '/articlesMore',
      name: 'articlesMore',
      component: articlesMore
    },
    {
      path: '/numbling',
      name: 'numbling',
      component: numbling
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})

export default router