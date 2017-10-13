<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <h3>after discount</h3>
        <ul>
            <li v-for="product in discountedProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <button @click="reduce(10)">Reduce Price 10 per time</button>
    </div>
</template>
<script>
export default {
    name: 'product-list-one',
    computed: {
        products() {
            // use computed to get store data from Vuex
            return this.$store.state.products;
        },
        discountedProducts() {
            // use computed to get store data from Vuex getters
            return this.$store.getters.discountedProducts;
        }
    },
    methods: {
        reduce(amount){
            // dispatch an action with the parmeter, that is a good practice to instead of directly committion a mutation even it is not any kind of asynchronous task
            this.$store.dispatch('reduceAction', amount)
        }
    }
};
</script>
<style lang="css" scoped>
#product-list-one {
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}

#product-list-one ul {
    padding: 0;
}

#product-list-one li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}

.price {
    font-weight: bold;
    color: #E8800C;
}
</style>