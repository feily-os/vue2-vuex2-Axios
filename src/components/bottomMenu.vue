<template>
    <section v-show="menuShowState" class="btm-menu-sty">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="index" @click.native="clickMenu('index')">
                <i slot="icon" class="iconfont">&#xe65e;</i>
                首页
            </mt-tab-item>
            <mt-tab-item id="seeHouses" @click.native="clickMenu('seeHouses')">
                <i slot="icon" class="iconfont">&#xe698;</i>
                看房
            </mt-tab-item>
            <mt-tab-item id="message" @click.native="clickMenu('message')">
                <i slot="icon" class="iconfont">&#xe698;</i>
                消息
            </mt-tab-item>
            <mt-tab-item id="follow" @click.native="clickMenu('follow')">
                <i slot="icon" class="iconfont">&#xe670;</i>
                关注
            </mt-tab-item>
            <mt-tab-item id="myMessage" @click.native="clickMenu('myMessage')">
                <i slot="icon" class="iconfont">&#xe66a;</i>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </section>
</template>
<script>
    export default {
        props: ['menuShowState'],
        data() {
            return {
                selected: 'index'
            }
        },
        methods: {
            clickMenu(rst) {
                if (rst === "seeHouses") {
                    console.log(rst);
                } else if (rst === "message") {
                    console.log(rst);
                } else if (rst === "follow") {
                    console.log(rst);
                } else if (rst === "myMessage") {
                    console.log(rst);
                } else if (rst === "index") {
                    console.log(rst);
                }
            }
        }
    }
</script>
<style>
    .iconfont {
        font-size: 18px;
    }
    .mint-tabbar {
        background-color: #fff;
    }
    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: transparent;
    }
    .btm-menu-sty {
        background-color: #fff;
    }
</style>