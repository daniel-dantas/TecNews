<template>
    <div id="cardNoticia">
        <div class="row">
            <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <span><b><h5>{{noticia.titulo}}</h5></b></span>
                        <p>{{noticia.descricao}}</p>
                    </div>
                    <div class="card-action">
                        <a v-bind:href="noticia.link" class="blue-text">Acessar Noticia</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['noticia']
}
</script>
<style scoped>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
    
</style>