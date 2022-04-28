<template lang="">
	<section class="product-4">
			<div class="container product-4__top">
				<div class="product-4__block">
					<div class="product-4-top">
						<span class="num">02</span>
						<span class="num">ЭТАЛОННАЯ ТЯГА</span>
					</div>
				</div>
			</div>
	</section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
	.product-4{
		background-color: #000000;
    overflow: hidden;
    padding-bottom: 100px;
		&__top{
			position: relative;
			z-index: 10;
		}
		&__block{
			width: 100%;
    	padding-top: 123px;
		}
		&-top{
			display: flex;
    	align-items: center;
			.num{
				display: block;
				font-size: 28px;
				color: #ffffff;
				font-family: "Medium";
				margin-right: 24px;
			}
		}
	}
</style>