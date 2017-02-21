<template>
    <div id="app">
        <div class="main">
            <mint-search :mintSearchState="mintSearchState"></mint-search>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <btm-menu :menuShowState="menuShowState"></btm-menu>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            menuShowState: function () {
                return this.$store.state.menuShowState;
            },
            mintSearchState: function () {
                return this.$store.state.mintSearchState;
            }
        },
        components: {
            'btmMenu': require('components/bottomMenu'),
            'mintSearch': require('components/mintUiSearch')
        }
    }
</script>
<style lang="">
    .main {
        background-color: #f2f2f2;
        height: 100vh;
    }

    p {
        margin: 0;
    }
</style>