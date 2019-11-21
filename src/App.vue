<template>
  <div id="app">
      <NavBar v-bind:links="links" v-bind:urlLogo="urlLogo"></NavBar>
      <h2>
        Inicio
      </h2>

  </div>
</template>
<script>

import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  },
  data: () => {
    return {
      links: [
        {nome: 'Jogos', caminho: '/jogos'},
        {nome: 'Cinema', caminho: '/cinema'},
        {nome: 'Vestibular', caminho: '/vestibular'},
      ],
      urlLogo: 'https://vuejs.org/images/logo.png'
    }
  }
}
</script>


