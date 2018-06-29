import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    // 'h' is an alias for 'createElement' (it's a convention in the Vue.js ecosystem according to the documentation)
    // https://vuejs.org/v2/guide/render-function.html
    render: h => h(App)
});