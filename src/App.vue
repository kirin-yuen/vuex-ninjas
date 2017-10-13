<template>
    <div id="app">
        <product-list-one :products="products"></product-list-one>
        <product-list-two :products="products"></product-list-two>
    </div>
</template>
<script>
import ProductListOne from './components/product-list-one.vue';
import ProductListTwo from './components/product-list-two.vue';

export default {
    name: 'app',
    data() {
        return {
            // store share the data on the root component and pass it down which need
            products: [
                { name: 'Banana Skin', price: 20 },
                { name: 'Shiny Star', price: 40 },
                { name: 'Green Shells', price: 60 },
                { name: 'Red Shells', price: 80 }
            ]
        }
    },
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    }
}
</script>
<style lang="scss">
</style>