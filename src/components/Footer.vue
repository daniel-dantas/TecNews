<template>
    <div id="footer">
        <footer class="page-footer teal lighten-2">
            <div class="container">
            </div>
            <div class="footer-copyright">
                <div class="container center">
                    &copy; {{copy}}
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    props: ['copy']
}
</script>