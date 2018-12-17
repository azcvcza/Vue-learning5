import Vue from 'vue'
import Router from 'vue-router'

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart"

Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "*", redirect: "/" }
    ],
    mode: 'history'
})