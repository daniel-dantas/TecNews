<template>
  <div id="app">  
      <NavBar v-bind:links="navbar.links" v-bind:urlLogo="navbar.urlLogo"></NavBar>
      <router-view></router-view>
      <Footer copy="Noticias Quentinhas"></Footer>
  </div>
</template>
<script>

import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  },

  data: ()=>{
    return {
      navbar: {
        links: [
          {nome: 'Ciência Saude', caminho: '/CienciaSaude'},
          {nome: 'Cinema', caminho: '/cinema'},
          {nome: 'Vestibular', caminho: '/vestibular'},
        ],
        urlLogo: 'https://vuejs.org/images/logo.png'
      },
      noticias: []
    }
  },
  
}
</script>


