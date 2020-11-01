<template>
<li @click="productClick" v-tilt="{perspective: 1000}">
	<h3> {{ product.name }}</h3>
	<span>{{ product.abv }}</span>
	<img alt="beer image" :src="product.image_url" height="150">
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
	align-items: center;

	background-color: #050505;
	width: 250px;
	height: 380px;
	border-radius: 50px;
	margin: 20px;
	cursor: pointer;
	
	h3 {
		padding: 30px 15px 0;
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
