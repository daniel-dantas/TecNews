<template>
    <div id="app">
        <div class="row">
            <div class="col s12">
                <Container :noticias="noticias" tituloContainer="Mundo"></Container>
            </div>
        </div>
    </div>
</template>
<script>

import Container from '../components/Container'
import NotMundo from '../services/NotMundo'
import xmlintojson from 'xmlintojson'

export default {
    components: {
        Container
    },
    data: ()=>{
        return {
            noticias: []
        }
    },
    mounted(){
        NotMundo.read().then(res => {
            let json = xmlintojson(res.data)
            this.noticias = json.rss.channel.item.filter(not => {return not != null})
        })
    }
}
</script>