export default {
    namespaced: true,
    state: {
        lines: []
    },
    getters: {
        itemCount: state => state.lines.reduce((total, line) =>
            total + line.quantity, 0),
        totalPrice: state => state.lines.reduce((total, line) =>
            total + (line.quantity * line.product.price), 0)
    },
    mutations: {
        addProduct(state, product) {
            let line = state.lines.find(line => line.product.id == product.id);
            if (line != null) {
                line.quantity++;
            } else {
                state.lines.push({
                    product: product,
                    quantity: 1
                })
            }
        },
        changeQuantity(state, update) {
            state.line.quantity = update.quantity
        },
        removeProduct(state, lineToRemove) {
            let index = state.lines.findIndex(line => line == lineToRemove);
            if (index > -1) {
                state.lines.splice(index, 1);
            }
        },
        setCartData(state, data) {
            state.lines = data;
        }
    },
    actions: {
        loadCartData(context) {
            let data = localStorage.getItem("cart");

            if (data != null) {
                console.log("loading data");
                context.commit("setCartData", JSON.parse(data));
            }
        },
        storeCartData(context) {
            console.log("store:", context)
            localStorage.setItem("cart", JSON.stringify(context.state.lines));
        },
        clearCartData(context) {
            console.log("clear:", context)
            context.commit("setCartData", []);
        },
        initialiazeCart(context, store) {
            console.log("init,:", store)
            context.dispatch("loadCartData");
            store.watch(state => state.cart.lines, () => context.dispatch("storeCartData"), { deep: true })
        }
    }
}