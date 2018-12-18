// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Vuelidate from "vuelidate";
Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";


Vue.filter("currency", (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value));
Vue.use(Vuelidate);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})