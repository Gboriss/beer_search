<template>
<ul>
    <li class="content">
		<div class="black_container">
			<div class="punkt">
				<div class="name">
					<h1> Pilsen Lager</h1>
					<h3>Unleash the Yeast Series.</h3>
				</div>

				<div class="list">
					<p class="level">ABV: 7.2%</p>
					<p class="level">IBU: 70</p>
					<p class="level">EBC: 30</p>
				</div>
			</div>

			<div class="description">
				<img src="https://images.punkapi.com/v2/192.png" height="250">
				<p>Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.
				</p>
			</div>
		</div>
    </li>
</ul>
  
</template>

<script>
export default {
    name: 'beer_list'

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
	justify-content: start;
	align-items: start;

	background-color: #050505;
	width: 400px;
	height: 500px;
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
			margin-bottom: 8px;
			border-radius: 2px;

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
			width: 250px;
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