<template>
    <section class="search-sty" v-show="mintSearchState">
        <mt-search v-model="value" fixed></mt-search>
    </section>
</template>
<script>
    export default {
        props:['mintSearchState'],
        data() {
            return {
                value: ""
            }
        }
    }
</script>
<style>
    .mint-searchbar {
        background-color: inherit;
    }
    .mint-searchbar-inner {
        border: 1px solid #cccccc;
        border-radius: 3px;
    }
    .search-sty {
        background-color: #fff;
        height: 55px;
    }
</style>