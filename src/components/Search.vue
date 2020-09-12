<template>
<div>
	<form 
		class="search"
		@submit.prevent="searchBeer"
	>
		<input 
			type="text" 
			autocomplete="off"
			v-model="keyword" 
		/>
	</form>
	<ul>
		<li v-for="beer in beers" :key="beer.id" :beer="beer">
			{{ beer.name }}
		</li>
	</ul>
</div>
</template>

<script>

export default {
	name: 'Search',
	data: function () {
  		return {
			keyword: '',
  		}
	},
	props: ['beers'],

	methods: {
		searchBeer() {
			this.$http
				.get('https://api.punkapi.com/v2/beers?beer_name=' + this.keyword)
				.then(response => {
					console.log(response.data) 
					this.$store.commit('set_products', response.data)
					this.keyword = ''					
				})
				.catch(error => {
					 console.log(error)
				})
		},
	},
}

</script>

<style scoped lang="scss">

form {
	margin: 20px 0;
	padding: 30px;
}

input {
	position: relative;
	width: 100%;
	height: 57px;
	border-radius: 100px;
	font-size: 30px;
	line-height: 1.4em;
	color: #1C1C1C;
	padding: 16px 16px 16px 40px;
	background-color: #F1F1F1;
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
	box-sizing: border-box;
}

</style>