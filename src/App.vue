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
      links: ['jogos']
    }
  }
}
</script>


