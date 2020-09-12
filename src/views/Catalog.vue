<template>
	<ul>
		<Product 
			v-for="product in products"
			:key="product.id"
			:product="product"
			@productClick="productClick"
		/>
	</ul>
</template>

<script>
import Product from '../components/Product'
import { mapActions } from 'vuex'

export default {
	name: 'Catalog',
	components: {
		Product
	},
	computed: {
		products() {
			return this.$store.state.products
		},
	},
	methods: {
		...mapActions([
			'get_products_from_api'
		]),
		productClick(name) {
			this.$router.push({name: 'ProductPage' , query: {'beer': name}})
		}
	},
	mounted() {
        this.get_products_from_api()       
    }
}
</script>

<style lang="scss" scoped>

ul {
	display: flex;
	flex-wrap: wrap;
}

</style>
