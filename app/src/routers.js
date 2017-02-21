import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//实例化VueRouter
let router = new VueRouter({
    routes: [{
        path: '/',
        component: require('./views/advertising/advertising')
    }, {
        path: '/index',
        component: require('./views/index')
    }, {
        path: '/login',
        component: require('./views/user/login')
    }]
});


export default router;