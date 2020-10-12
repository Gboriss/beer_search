<template>
<div>
	<form 
		class="search"
		@submit.prevent="searchBeer"
	>
		<input 
			type="text"
			aria-label="Search"
			autocomplete="off"
			v-model="keyword" 
		/>
		<button name="search">
			<img alt="button search" src="../assets/images/magnifying-glass.svg" width="35">
		</button>
	</form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Search',
	data: function () {
  		return {
			keyword: '',
  		}
	},
	methods: {
		...mapActions([
			'get_search_value'
		]),
		searchBeer() {
			this.$http
				.get('https://api.punkapi.com/v2/beers?beer_name=' + this.keyword)
				.then(response => {
					// console.log(response.data) 
					this.$store.commit('set_products', response.data)
					this.keyword = ''					
				})
				.catch(error => {
					console.log(error)
				})
				this.$router.push('/catalog').catch(()=>{});
		},
	},
}

</script>

<style scoped lang="scss">

form {
	margin: 0 0 35px;
	padding: 30px;

	position: relative;
	display: flex;
	
}

input {
	position: relative;
	width: 100%;
	height: 57px;
	border-radius: 100px;
	font-size: 30px;
	line-height: 1.4em;
	color: #1C1C1C;
	padding: 16px 70px 16px 60px;
	background-color: #F1F1F1;
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
	box-sizing: border-box;
}

button {
	flex-shrink: 0;
	position: absolute;
	right: 45px;
	top: 35px;
	width: 40px;
	height: 50px;
	user-select: none;
}

</style>