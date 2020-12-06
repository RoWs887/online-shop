import axios from 'axios';

export default {
    GET_PRODUCTS_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
        .then((products) => {
            commit('SET_PRODUCT_STATE', products.data);
            return products;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    INCREMENT_CART({commit}, index) {
        commit('INCREMENT', index);
    },
    DECREMENT_CART({commit}, index) {
        commit('DECREMENT', index);
    },
    DELETE_CART({commit}, index){
        commit('REMOVE_CART', index)
    }
}