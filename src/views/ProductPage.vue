<template>
<section class="content">
    <div class="black_container">
        <div class="punkt">
            <div class="name">
                <h1> {{ product.name}}</h1>
                <h3>{{ product.tagline }}</h3>
            </div>

            <div class="list">
                <p class="level">ABV: {{ product.abv }}</p>
                <p class="level">IBU: {{ product.ibu }}</p>
                <p class="level">EBC: {{ product.ebc }}</p>
            </div>
        </div>

        <div class="description">
            <img alt="big images beer" :src="product.image_url" height="250">
            <p>{{ product.description }}</p>
        </div>
    </div>
</section>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ProductPage',
    computed: {
		products() {
			return this.$store.state.products
		},
		product() {
			let result = {}
			let vm = this
			this.products.map(function (item) {
				if (item.name === vm.$route.query.beer) {
					result = item
				}
			})
			return result
		}
	},
	methods: {
		...mapActions([
			'get_products_from_api'
		]),
	},
	mounted() {
        this.get_products_from_api()       
	}
}
</script>

<style scoped lang="scss">

.content {
	display: flex;
	justify-content: center;
	align-items: center;

}
.black_container {
	display: flex;
	flex-direction: column;
	// justify-content: flex-start;
	// align-items: flex-start;

	background-color: #050505;
	width: 400px;
	max-height: 640px;
	padding-left: 30px;
	padding-top: 20px;

	border-radius: 50px;
	margin: 20px;

	.punkt {
		display: flex;
	}
	
	h1, h3 {
		padding: 10px;
		color: #FFFFFF;
	}

	.list {
		display: flex;
		flex-direction: column;
		margin: 20px;

		p {
			border: 2px solid #FFFFFF;
			color: #FFFFFF;
			margin: 0;
			border-radius: 2px;
			margin-bottom: 8px;

		}
	}
	
	.description {
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				margin: 20px;
			}

		p {
			// width: 250px;
			max-width: 270px;
			border: 2px solid #FFFFFF;
			margin: 20px;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 22px;
			color: #FFFFFF;
		}
	}
}


</style>