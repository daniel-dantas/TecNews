<template>
    <div id="app">
      <div class="row">
        <div class="col s12 m12">
            <Container v-bind:noticias="noticias" tituloContainer="Tecnologia"></Container>
        </div>
      </div>
    </div>
</template>
<script>

import Container from '../components/Container'
import NotTecnologia from '../services/NotTecnologia'
import xmlIntoJson from 'xmlintojson'

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
    NotTecnologia.read().then(resposta => {
      let json = xmlIntoJson(resposta.data)
      let noticias = json.rss.channel.item.filter(not => {return not!=null})
      this.noticias = noticias
    })
  }
}
</script>
