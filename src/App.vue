<template>
  <div id="app">  
      <NavBar v-bind:links="navbar.links" v-bind:urlLogo="navbar.urlLogo"></NavBar>
      <router-view></router-view>
      <Footer :data="footer"></Footer>
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
          {nome: 'Mundo', caminho: '/mundo'}
        ],
        urlLogo: 'logo.png'
      },
      footer: {
        copy: "Tecno Noticias",
        titulo: "Desenvolvedor: Daniel Dantas",
        descricao: "Aqui uma breve descricao do Software",
        links: [
          {nome: "Facebook", caminho: ""},
          {nome: "GitHub", caminho: ""}
        ]
        

      }
    }
  },
  
}
</script>


