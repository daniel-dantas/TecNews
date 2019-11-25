<template>
    <div id="app">
      <div class="row">
        <div class="col s12 m4">
            <Container v-bind:noticias="ultimasNoticias" tituloContainer="Ultimas Noticias"></Container>
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
// import NotCienciaeSaude from '../services/NotCienciaeSaude'
import xmlIntoJson from 'xmlintojson'

export default {
    components:{
        Container
    },
    data: () => {
    return {
      noticias: [],
      ultimasNoticias: []
    }
  },
  mounted(){
    NotTecnologia.read().then(resposta => {
      let json = xmlIntoJson(resposta.data)
      let noticias = json.rss.channel.item.filter(not => {return not!=null})
      this.ultimasNoticias = noticias.slice(0,3)
      this.noticias = noticias.slice(3, noticias.length)
    })


  }
}
</script>
