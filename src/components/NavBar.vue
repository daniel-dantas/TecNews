<template>
    <div id="navbar">
        <nav>
            <div class="nav-wrapper blue accent-4">
            <a href="/" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                
                <li v-for="link in links" v-bind:key="link"><a v-bind:href="'/'+link">{{link}}</a></li>
            </ul>
            </div>
        </nav>

        <ul class="sidenav blue darken-3" id="mobile-demo">
            <li v-for="link in links" v-bind:key="link"><a style="color: white" v-bind:href="'/'+link">Sass</a></li>
        </ul>
    </div>
</template>
<script>

export default {
    props:{
        links: []
    },
    name: 'navbar'
}
</script>

<style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
    
</style>
