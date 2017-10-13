import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // set true will be error if mutate vuex store state outside mutation handlers
    strict: true,
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
    },
    // mutation can be tracked by vue devtool
    mutations: {
        reduceMutation(state, payload){
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    // one of the limitation of mutation is that can not be use asynchronous task(grab some data from server) with it
    actions: {
        // context is some kind of store, payload is the parameter that pass from method dispatch
        reduceAction(context, payload){
            // settimeout is some kind of the synchronous task
            window.setTimeout(() => {
                context.commit('reduceMutation', payload);
            }, 2000);
        }
    }
});

