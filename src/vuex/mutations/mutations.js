export default {
    SET_PRODUCT_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state, product) => {
        if (state.cart.length) { 
            let isPrExists = false;
            state.cart.map(function (item) {
                if (item.article === product.article){
                    isPrExists = true;
                    item.quantity++
                }
            })
            if (!isPrExists) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    REMOVE_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    }
}