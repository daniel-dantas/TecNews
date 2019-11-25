<template>
    <div id="app">
        <div class="row">
            <div class="col s12 m4">
                <Container v-bind:noticias="noticias" tituloContainer="Últimas Noticias"></Container>
            </div>
            <div class="col s12 m8">
                <Container v-bind:noticias="noticias" tituloContainer="Ciência e saude"></Container>
            </div>
      </div>
    </div>
</template>
<script>

import Container from '../components/Container'
import NotCienciaSaude from '../services/NotCienciaeSaude'
import xmlintojson from 'xmlintojson'

export default {
    name: 'Jogos',
    components: {
        Container
    },
    data: () => {
        return {
            noticias: []
        }
    },
    mounted(){
        NotCienciaSaude.read().then(resposta => {
            let json = xmlintojson(resposta.data)
            this.noticias = json.rss.channel.item.filter(not => {return not!=null})
        })
    }
}
</script>