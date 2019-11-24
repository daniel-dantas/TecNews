<template>
  <div id="app">  
      <NavBar v-bind:links="navbar.links" v-bind:urlLogo="navbar.urlLogo"></NavBar>
      <router-view></router-view>
  </div>
</template>
<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  },

  data: ()=>{
    return {
      navbar: {
        links: [
          {nome: 'Jogos', caminho: '/jogos'},
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


