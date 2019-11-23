<template>
    <div id="app">
        <div class="row">
            <div class="col s12 m4">
                <Container v-bind:noticias="noticias" tituloContainer="Últimas Noticias"></Container>
            </div>
            <div class="col s12 m8">
                <Container v-bind:noticias="noticias" tituloContainer="Jogos"></Container>
            </div>
      </div>
        
    </div>
</template>
<script>

import Container from '../components/Container'
export default {
    name: 'Jogos',
    components: {
        Container
    },
    data: () => {
        return {
            noticias: [
                {titulo: 'Titulo1', descricao: 'Descricao1', link: '#'},
                {titulo: 'Titulo2', descricao: 'Descricao2', link: '#'},
                {titulo: 'Titulo3', descricao: 'Descricao3', link: '#'},    
            ]
        }
    }
}
</script>