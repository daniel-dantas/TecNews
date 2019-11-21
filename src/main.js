import Vue from 'vue'
import App from './App.vue'
import Jogos from './pages/Jogos.vue'
import NotFound from './pages/NotFound.vue'

Vue.config.productionTip = false

// Trabalhando com rotas
const routes = {
  '/': App,
  '/jogos': Jogos,
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
