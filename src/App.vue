<template>
  <div id="app">
      <NavBar v-bind:links="links"></NavBar>
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
      ]
    }
  }
}
</script>


