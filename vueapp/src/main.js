import { createApp } from 'vue';
import App from './App.vue';
import store from "./store";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");


//import Vue from 'vue';
//import App from './App.vue';
//import router from './router';
//import store from './store';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import VeeValidate from 'vee-validate';

//Vue.config.productionTip = false;

//Vue.use(VeeValidate);

//new Vue({
//    router,
//    store,
//    render: h => h(App)
//}).$mount('#app');






