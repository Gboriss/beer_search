import Vue from 'vue'
import VueRouter from 'vue-router'
import catalog from '../views/Catalog.vue'
import productPage from '../views/ProductPage.vue'
// import app from '../App'

Vue.use(VueRouter)

  const routes = [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: app,
    //   props: true
    // },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalog,
    props: true
  },
  {
    path: '/product/',
    name: 'ProductPage',
    component: productPage,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
