<template>
    <div id="footer">
        <footer class="page-footer grey darken-4">
            <div class="container">
                <div class="row">
                    <div class="col s12 m6">
                        <p>{{data.descricao}}</p> 
                        
                    </div>
                    <div class="col s12 m6">
                        <p>{{data.titulo}}</p>
                        <ul>
                            <li v-for="link in data.links" :key="link.nome"><a class="grey-text text-lighten-3" :href="link.caminho">{{link.nome}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container center">
                    &copy; {{data.copy}}
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>