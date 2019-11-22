import Vue from 'vue'
import App from './App.vue'
import Jogos from './pages/Jogos.vue'
import Index from './pages/Index.vue'
// import NotFound from './pages/NotFound.vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/jogos', component: Jogos},
  {path: '/', component: Index}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
