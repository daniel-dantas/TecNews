<template>
    <div id="app">
        <NavBar v-bind:links="links" v-bind:urlLogo="urlLogo"></NavBar>
        <br>
        <div>
            <h2>Jogos</h2>
        </div>
    </div>
</template>
<script>

import NavBar from '../components/NavBar'
export default {
    name: 'Jogos',
    components: {
        NavBar
    },
    data: () => {
        return {
            links: [
                {nome: 'Jogos', caminho: '/jogos'},
                {nome: 'Cinema', caminho: '/cinema'},
                {nome: 'Vestibular', caminho: '/vestibular'},

            ],
            urlLogo: 'https://vuejs.org/images/logo.png'
        }
    }
}
</script>