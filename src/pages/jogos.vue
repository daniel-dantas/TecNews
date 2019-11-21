<template>
    <div id="app">
        <NavBar v-bind:links="links"></NavBar>
        <br>
        <div>
            <h2>Teste</h2>
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
            links: ['jogos']
        }
    }
}
</script>