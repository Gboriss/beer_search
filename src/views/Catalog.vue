<template>
<div>
	<div class="range-slider">
		<input 
			type="range" 
			min="0" max="20" 
			step="1"
			v-model.number="minAbv"
			@change="setRanges"
			
		>
		<input 
			type="range" 
			min="0" 
			max="20" 
			step="1"
			v-model.number="maxAbv"
			@change="setRanges"
		>
		<div class="range-values">
			<p>Min alc {{minAbv}} %</p>
			<p>Max alc {{maxAbv}} %</p>

		</div>
	</div>
	<!-- <Slider 
		:products="products"
		@sortByCategories="sortByCategories"

	/> -->
	<ul v-if=" fproducts.length">
		<Product 
			v-for="product in fproducts"
			:key="product.id"
			:product="product"
			@productClick="productClick"
		/>
	</ul>
	<section v-if="!products.length">
		<h2>Nothing found</h2>
		<img alt="alcohol" src="../assets/images/alcohol.svg" width="200px">
	</section>
</div>
</template>

<script>
import Product from '../components/Product'
// import Slider from '../components/Slider.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Catalog',
	components: {
		Product,
		// Slider
	},
	data() {
        return {
			sortedProducts: [],
			minAbv: 0,
            maxAbv: 60
        }
    },
	computed: {
		products() {
			return this.$store.state.products
		},
		fproducts() {
            // if (this.sortedProducts.length) {
            //     return this.sortedProducts
            // } else {
			// 	return this.products
			// }
			
			let vm = this
				this.sortedProducts = [...this.products]
				return	this.sortedProducts = this.sortedProducts.filter(function (item) {
					return item.abv >= vm.minAbv && item.abv <= vm.maxAbv
			})
		},
		// ...mapGetters([
		// 	'search_Value'
		// ])  
	},
	methods: {
		...mapActions([
			'get_products_from_api'
		]),
		productClick(name) {
			this.$router.push({name: 'ProductPage' , query: {'beer': name}})
		},

		setRanges() {
            if (this.minAbv > this.maxAbv) {
                let temp = this.maxAbv
                this.maxAbv = this.minAbv
                this.minAbv = temp
            }
            this.sortByCategories()
        },

		sortByCategories() {
            let vm = this
			this.sortedProducts = [...this.products]
            this.sortedProducts = this.sortedProducts.filter(function (item) {
					return item.abv >= vm.minAbv && item.abv <= vm.maxAbv
				})
	
			// if (category) {
			// 	this.sortedProducts = this.sortedProducts.filter(function (e) {
			// 		vm.sortedProducts === category.name
            //         return e.category === category.name
			// 	})
			// }
		},
		// sortProductsBySearchValue() {
		// 	this.sortedProducts = [...this.products]

		// 	if (value) {
		// 		this.sortedProducts = this.sortedProducts.filter(function (item) {
		// 			return item.name.toLowerCase().includes(value.toLowerCase())
		// 		})
		// 	} else {
		// 		this.sortedProducts = this.products

		// 	}
		// }
	},
	watch: {
		// search_Value() {
		// 	this.sortProductsBySearchValue(this.search_Value)
		// }
	},
	mounted() {
        this.get_products_from_api()
			.then((response) => {
				if (response.data) {
					console.log('dara.arrived')
					this.sortByCategories()
					// this.sortProductsBySearchValue()
				}
			})    
    }
}
</script>

<style lang="scss" scoped>

ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	// padding-left: 20px;
}

h2 {
	margin-bottom: 20px;
	font-size: 35px;
}



.range-values {
    margin-left: 25px;
}
.range-slider {
    display: flex;
    justify-content: flex-start;
    position: relative;

    width: 200px;
    margin: auto 16px;
    text-align: center;
}

.range-slider input[type=range] {
	margin: 20px;

    position: absolute;
    width: 250px;
    left: 0;
    bottom: 85px;

}
::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;     
}
input[type=range]{
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1.5px solid #C1C1C1;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #EDEDED;
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    box-shadow: 1px 1px 1px #C6C6C6, 0px 0px 1px #787878;
    border-radius: 2px;
    border: 0.2px solid #787878;
}
</style>
