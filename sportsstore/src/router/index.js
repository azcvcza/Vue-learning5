import Vue from 'vue'
import Router from 'vue-router'

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart"
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";
Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout },
        { path: "/thanks/:id", component: OrderThanks },
        { path: "*", redirect: "/" }
    ],
    mode: 'history'
})