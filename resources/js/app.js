require('./bootstrap');

import Vue from 'vue';

import App from './Components/App.vue';
import store from './store/index.js'
import router from './router/index.js';

const app = new Vue({
    el:'#app',
    store,
    router,
    components:{App}
})