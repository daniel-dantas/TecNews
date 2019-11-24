<template>
    <div id="app">
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

import Container from '../components/Container'
import NotTecnologia from '../services/NotTecnologia'

export default {
    components:{
        Container
    },
    data: () => {
    return {
      noticias: []
    }
  },
  mounted(){
    NotTecnologia.read().then(res => {
      this.noticias = res
    })
  }
}
</script>
