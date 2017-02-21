<template>
    <section class="index-sty">
        <div class="btn-menu-header">
            <div class="btn-header-list">
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
            </div>
            <div class="btn-header-list">
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
                <div class="btn-list">
                    <i class="iconfont">&#xe65f;</i>
                    <p>新房</p>
                </div>
            </div>
        </div>
        <div class="mfbg-sty">
            <p class="mfbg-title-sty">买房必逛</p>
            <div class="mfbg-cnnt-sty btm-marg-line">
                <div class="mfbg-sty-col-1">
                    <div class="mfbg-sty-col-2">
                        <p class="mfbg-sty-col-2-p1">降价房源</p>
                        <p class="mfbg-sty-col-2-p2">降价了还不买?</p>
                    </div>
                    <img class="mfbk-img-sty" src="../assets/images/advertisingImgs/img-02.jpg">
                </div>
                <div class="r-line"></div>
                <div class="mfbg-sty-col-1">
                    <div class="mfbg-sty-col-2">
                        <p class="mfbg-sty-col-2-p1">降价房源</p>
                        <p class="mfbg-sty-col-2-p2">降价了还不买?</p>
                    </div>
                    <img class="mfbk-img-sty" src="../assets/images/advertisingImgs/img-02.jpg">
                </div>
            </div>
            <div class="mfbg-cnnt-sty">
                <div class="mfbg-sty-col-3">
                    <p>降价房源</p>
                    <img class="mfbk-img-sty img-marg-top" src="../assets/images/advertisingImgs/img-02.jpg">
                </div>
                <div class="r-line"></div>
                <div class="mfbg-sty-col-3">
                    <p>降价房源</p>
                    <img class="mfbk-img-sty img-marg-top" src="../assets/images/advertisingImgs/img-02.jpg">
                </div>
                <div class="r-line"></div>
                <div class="mfbg-sty-col-3">
                    <p>降价房源</p>
                    <img class="mfbk-img-sty img-marg-top" src="../assets/images/advertisingImgs/img-02.jpg">
                </div>
                <div class="r-line"></div>
                <div class="mfbg-sty-col-3">
                    <p>降价房源</p>
                    <img class="mfbk-img-sty img-marg-top" src="../assets/images/advertisingImgs/img-02.jpg">
                </div>
            </div>
        </div>
        <div class="esfj-sty">
            <p class="esfj-header-sty">
                <span>阿斯达所多</span>
                <span class="esfj-sty-dt">查看详情<i class="iconfont">&#xe61f;</i></span>
            </p>
            <div class="esfj-footer-sty">
                <div class="esfj-footer-sty-col-1">
                    <p>水电费撒</p>
                    <p>45345455</p>
                </div>
                <div class="esfj-sty-line"></div>
                <div class="esfj-footer-sty-col-1">
                    <p>阿斯达所</p>
                    <p>+1.82%</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            this.menuAndSearch;
            this.change();
            this.zhihu();
        },
        methods: {
            change() {
                this.axios.get('/mockjs/1/login').then((rst) => {
                    console.log(rst)
                }).catch((error) => {

                })
            },
            zhihu() {
                this.axios.get('/zhihu/api/4/news/latest').then((rst) => {
                    console.log(rst)
                }).catch((error) => {

                })
            }
        },
        computed: {
            menuAndSearch: function() {
                this.$store.state.menuShowState = true;
                this.$store.state.mintSearchState = true;
            }
        }
    }
</script>
<style>
    .index-sty {
        overflow: scroll;
    }
    .esfj-sty-line {
        width: 1px;
        background-color: #f2f2f2;
    }
    
    .esfj-footer-sty-col-1 {
        flex: 1;
        padding: 10px;
    }
    
    .esfj-footer-sty {
        display: flex;
        padding-bottom: 10px;
    }
    
    .esfj-sty-dt .iconfont {
        font-size: 13px;
    }
    
    .esfj-sty-dt {
        float: right;
        font-size: 13px;
        color: #8e8e8e;
    }
    
    .esfj-header-sty {
        padding: 10px;
    }
    
    .esfj-sty {
        margin-bottom: 10px;
        background-color: #fff;
    }
    
    .img-marg-top {
        margin-top: 10px;
    }
    
    .mfbg-sty-col-3 {
        flex: 1;
        height: 70px;
        padding: 10px 0;
        text-align: center;
        background-color: #f2f2f2;
    }
    
    .btm-marg-line {
        margin-bottom: 3px;
    }
    
    .mfbg-sty-col-2-p1 {
        flex: 1;
    }
    
    .mfbg-sty-col-2-p2 {
        color: #969696;
        font-size: 13px;
    }
    
    .mfbg-sty-col-2 {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .r-line {
        width: 3px;
    }
    
    .mfbg-sty-col-1 {
        flex: 1;
        display: flex;
        padding: 15px 10px;
        background-color: #f2f2f2;
    }
    
    .mfbg-cnnt-sty {
        display: flex;
    }
    
    .mfbg-title-sty {
        padding-bottom: 10px;
    }
    
    .btn-header-list {
        display: flex;
        text-align: center;
    }
    
    .btn-list {
        height: 50px;
        flex: 1;
    }
    
    .btn-list p {
        margin: 0;
    }

    .btn-list .iconfont {
        font-size: 6vw;
    }
    
    .btn-menu-header {
        background-color: #fff;
        margin-bottom: 10px;
    }
    
    .mfbk-img-sty {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    
    .mfbg-sty {
        background-color: #fff;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>