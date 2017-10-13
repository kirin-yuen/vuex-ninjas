import Vue from 'vue'
import App from './App.vue'

// import store and install it into Vue instance
import { store } from './store/store'

new Vue({
    store: store,
    el: '#app',
    render: h => h(App)
})