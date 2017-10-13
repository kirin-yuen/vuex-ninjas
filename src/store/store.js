import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana Skin', price: 10 },
            { name: 'Shiny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 }
        ]
    },
    // something like computed property
    getters: {
        // state is from Vuex state
        discountedProducts(state) {
            return state.products.map(product => {
                return {
                    name: 'discouted ' + product.name,
                    price: product.price / 2
                };
            });
        }
    }
});