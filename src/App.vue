<template>
  <div id="app">
      <router-view></router-view>
      <NavBar v-bind:links="navbar.links" v-bind:urlLogo="navbar.urlLogo"></NavBar>
      <div class="row">
        <div class="col s12 m4">
            <Container v-bind:noticias="noticias" tituloContainer="Últimas Noticias"></Container>
        </div>
        <div class="col s12 m8">
            <Container v-bind:noticias="noticias" tituloContainer="Tecnologia"></Container>
        </div>
      </div>
      
  </div>
</template>
<script>

import NavBar from './components/NavBar'
import Container from './components/Container'

export default {
  name: 'app',
  components: {
    NavBar,
    Container
  },
  data: () => {
    return {
      navbar: {
        links: [
          {nome: 'Jogos', caminho: '/jogos'},
          {nome: 'Cinema', caminho: '/cinema'},
          {nome: 'Vestibular', caminho: '/vestibular'},
        ],
        urlLogo: 'https://vuejs.org/images/logo.png'
      },
      noticias: [
        {titulo: 'Titulo1', descricao: 'Descricao1', link: '#'},
        {titulo: 'Titulo2', descricao: 'Descricao2', link: '#'},
        {titulo: 'Titulo3', descricao: 'Descricao3', link: '#'},
      ]

      
    }
  }
}
</script>


