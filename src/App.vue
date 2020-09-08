<template>
	<div id="app">
		<div id="nav">
			<Search />
			<router-link to="/">All</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
	name: 'App',
	components: {
		Search,
	},	
}
</script>

<style lang="scss">
@import './assets/fonts.css';
@import './assets/reset.css';
#app {
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	width: 100%;
	margin: 100px auto;
	text-align: center;
	color: #2c3e50;
}

#nav {
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #f1f1f1;
		}
	}
}

</style>
