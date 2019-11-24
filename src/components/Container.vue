<template>
    <div id="container-direita">
        <div class="row">
            <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <span><h4>{{tituloContainer}}</h4></span>
                        <CardNoticia v-for="noticia in noticias" v-bind:key="noticia.titulo" v-bind:noticia="noticia | convertPadrao()"></CardNoticia>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import CardNoticia from './CardNoticia'

export default {
    props: ['noticias', 'tituloContainer'],
    components: {
        CardNoticia
    },
    filters: {
        convertPadrao: (not)=>{
            
            return {titulo: not.title._text, descricao: "", link: not.link._text}
        }
    }
}
</script>
<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
</style>