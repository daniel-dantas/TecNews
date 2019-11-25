import Vue from 'vue'
import App from './App.vue'
import Index from './pages/Index.vue'
import CienciaSaude from './pages/CienciaSaude.vue'
import Mundo from './pages/Mundo'
// import NotFound from './pages/NotFound.vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Index},
  {path: '/cienciaSaude', component: CienciaSaude},
  {path: '/mundo', component: Mundo}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
