<template>
    <div id="navbar">
        <nav>
            <div class="nav-wrapper blue accent-4">
            <a href="/" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                
                <li v-for="link in links" v-bind:key="link.caminho"><a v-bind:href="link.caminho">{{link.nome}}</a></li>
            </ul>
            </div>
        </nav>

        <ul class="sidenav blue darken-3" id="mobile-demo">
            <li><a style="color: white" href="/">Pagina Inicial</a></li>
            <li v-for="link in links" v-bind:key="link.caminho"><a style="color: white" v-bind:href="link.caminho">{{link.nome}}</a></li>
        </ul>
    </div>
</template>
<script>

export default {
    props: ['links'],
    name: 'navbar'
}
</script>

<style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
    
</style>
