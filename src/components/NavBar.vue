<template>
    <div id="navbar">
        <nav>
            <div class="nav-wrapper  teal lighten-2">
            <div class="row">
                <div class="col s12 m1 center">
                    <a  href="/" class="brand-logo"><img id="logo" v-bind:src="urlLogo"></a>
                </div>
                <div class="col s12 m11">
                    
                    <a href="#" data-target="mobile-demo"  class="sidenav-trigger menu"><i class="material-icons">menu</i></a>
                        
                        
                        <ul class="right hide-on-med-and-down">
                            <li><router-link class="link" to="/">Pagina Inicial</router-link></li>
                            <li v-for="link in links" v-bind:key="link.caminho"><router-link class="link" v-bind:to="link.caminho">{{link.nome}}</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>

        <ul class="sidenav teal lighten-2" id="mobile-demo">
            <li><router-link class="link" to="/">Pagina Inicial</router-link></li>
            <li v-for="link in links" v-bind:key="link.caminho"><router-link class="link" v-bind:to="link.caminho">{{link.nome}}</router-link></li>
        </ul>
    </div>
</template>
<script>

export default {
    // Links será um array com todos os links e nome dos links, e UrlLogo é a url de onde está a logo 
    props: ['links', 'urlLogo'],
    name: 'navbar'
}
</script>

<style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
    
    a #logo{
        max-width: 60px;
    }

    li a.link{
        color: whitesmoke;
    }
    
    .menu{
        color: whitesmoke;
    }

</style>
