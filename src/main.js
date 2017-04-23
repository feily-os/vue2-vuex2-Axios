import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import store from './store/store'
import router from './routers'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/scss/iconfont.scss'

Vue.use(mint)
Vue.use(Vuex)
Vue.use(VueAxios, Axios)

// Vue.prototype.$http = Axios;

/* 开启错误提示 */
Vue.config.debug = true

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})