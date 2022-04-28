<template lang="">
    <section class="product-3">
			<div class="container">
				<div class="center">
					<div class="product-3__block">
						<div class="product-3__top">
							<span class="num">01</span>
							<span class="title">ЭЛЕГАНТНЫЙ ДИЗАЙН</span>
						</div>
						<div class="product-3__content">
							<img src="@/assets/img/product3.webp" alt="" width="465px">
							<span class="product-3__content-title">Сдержанный и уверенный в себе</span>
						</div>
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
	.product-3{
		background-color: #F2F2F2;
		padding-top: 170px;
		padding-bottom: 200px;
		.container{
			max-width: 1266px;
			padding: 0 20px;
			box-sizing: border-box;			
		}
		.center{
			height: auto;
		}
		&__block{
			width: 100%;
		}
		&__top{
			display: flex;
    	align-items: center;
			.num{
				display: block;
				font-size: 72px;
				color: black;
				font-family: "Medium";
				margin-right: 40px;
			}
			.title{
				display: block;
				font-family: "Light";
				font-size: 28px;
				line-height: 34px;
				color: #000;
			}
		}
		&__content{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			&-title{
				display: block;
				font-size: 27px;
				line-height: 39px;
				color: #464646;
				font-family: "Light";
				text-transform: uppercase;
				max-width: 220px;
				margin: 72px 131px 0 127px;
			}
		}
	}
</style>