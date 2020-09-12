<template>
<div id="about">
	<div class="left">
		<h1 class=''>Experimentation is our art. Revolution our weapon.</h1>
			
		<p class="">At BrewDog we are on a mission to make other people as passionate about great craft beer as we are. All we care about is brewing world-class craft beer; extraordinary beers that blow people's minds and kick-start a revolution.</p>

		<p class="">Our Headliners are the beers that stand shoulder to hop-flecked shoulder alongside it. These are the beers we brew most frequently. They are the beers our die-hard beer geek fans come back to, time and time again...</p>
	</div>

	<div class="right">
		<h3 class="">The brewing proccess</h3>

		<p class="">Brewing is a pretty simple, natural process. We take malt, water, yeast and hops and make something awesome.</p>
	</div>
</div>
</template>

<script>
export default {
    name: 'about'
}
</script>

<style lang="scss" scoped>
#about {
	display: flex;
	justify-content: space-between;
	margin: 40px;
    height: 100%;
    background-image: url("../assets/images/bumpy-green-plastic-texture-600x450.jpg");
    background-position: 50% 45%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed!important;
	
	.left,
	.right {
		overflow: hidden;
		flex-basis: 50%;
		margin: 20px;
		-webkit-box-flex: 0;
		-ms-flex-positive: 0;
		flex-grow: 0;
		max-width: 50%;
		color: #f1f1f1;
	}
}
</style>