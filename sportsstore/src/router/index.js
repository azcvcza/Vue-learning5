import Vue from 'vue'
import Router from 'vue-router'

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart"
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";
import Authentication from "../components/admin/Authentication";
import Admin from "../components/admin/Admin";
import ProductAdmin from "../components/admin/ProductAdmin";
import OrderAdmin from "../components/admin/OrderAdmin"
import ProductEditor from "../components/admin/ProductEditor";
import dataStore from "../store"
Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout },
        { path: "/thanks/:id", component: OrderThanks },
        { path: "/login", component: Authentication },
        {
            path: "/admin",
            component: Admin,
            beforeEnter(to, from, next) {
                if (dataStore.state.auth.authenticated) {
                    next();
                } else {
                    next("/login")
                }
            },
            children: [
                { path: "products", component: ProductAdmin },
                { path: "products/:op(create|edit)/:id(\\d+)?", component: ProductEditor },
                { path: "orders", component: OrderAdmin },
                { path: "", redirect: "/admin/products" },
            ],
        },
        { path: "*", redirect: "/" }
    ],
    mode: 'history'
})