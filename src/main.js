// import { createApp } from 'vue'
// import App from './App.vue';
// createApp(App).mount('#app');

import Vue from "vue";
import App from "./App.vue";
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
    router, // inject the router to make whole app router-aware
    render: h => h(App)
}).$mount("#app");



