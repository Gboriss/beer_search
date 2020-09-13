<template>
<li @click="productClick" v-tilt="{perspective: 700}">
	<h3> {{ product.name }}</h3>
	<span>{{ product.abv }}</span>
	<img :src="product.image_url" height="150" v-tilt="{perspective: 1000}">
	<p>{{ product.tagline }}</p>
</li>
</template>

<script>
export default {
	name: 'Product',
	props: ['product'],
	methods: {
        productClick() {
           this.$emit('productClick', this.product.name)
        }
    }

}
</script>

<style lang="scss" scoped>

li {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #050505;
	width: 250px;
	height: 380px;
	border-radius: 50px;
	margin: 20px;
	// opacity: 0.3;
	cursor: pointer;
	
	h3 {
		padding: 10px;
	}

	span {
		background-color: #2c3e50;
		color: #fff;
		padding: 10px;
		width: 30px;
		margin-left: auto;
		margin-top: 10px;
		margin-right: 15px;
		border-radius: 10px;

	}

	p {
		padding: 10px;
	}
}


</style>
