<template lang="">
	<section class="product-4">
			<div class="container product-4__top">
				<div class="product-4__block">
					<div class="product-4-top">
						<span class="num">02</span>
						<span class="title">ЭТАЛОННАЯ ТЯГА</span>
					</div>
					<div class="product-4__content">
						<span>
							Плотная тяга и баланс парообразования,
							<br>
							вот что делает парение Plonq особенным.   
						</span>
					</div>
				</div>
			</div>
			<div class="product-4-smoke__wrapper">
				<div class="product-4-smoke">
					<img src="@/assets/img/plonq-smoke.webp" alt="" class="plong-description__image">
				</div>
				<div class="product-4-smoke__container">
					<ul class="product-4-info">
						<li class="product-4-info__li">
							<span class="product-4-info__circle">
								<span>±0.4 кПа</span>
							</span>
							<span class="product-4-info__text">Плотность тяги</span>
						</li>
						<li class="product-4-info__li">
							<span class="product-4-info__circle">
								<span>7–7.5 мг</span>
							</span>
							<span class="product-4-info__text">Плотность пара</span>
						</li>
						<li class="product-4-info__li">
							<span class="product-4-info__circle">
								<span>=0.2 сек</span>
							</span>
							<span class="product-4-info__text">Скорость активации</span>
						</li>
					</ul>
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
			.title{
				display: block;
				font-size: 28px;
				line-height: 34px;
				color: #ffffff;
				font-family: "Light";
			}
		}
		&__content{
			display: flex;
    	justify-content: flex-end;
			span{
				margin-top: 74px;
				font-size: 20px;
				line-height: 27px;
				display: inline-block;
				color: #ffffff;
				font-family: "Light";
				margin-left: auto;
				margin-right: 168px;
			}
		}
		&-smoke{
			transform: translate(0, -80px);
			&__container{
				position: relative;
				max-width: 1158px;
				width: 100%;
				margin: -287px auto 0;
			}
		}
		&-info{
			display: flex;
    	justify-content: flex-end;
			&__li{
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-right: 68px;
			}
			&__circle{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 132px;
				height: 132px;
				border-radius: 50%;
				border: 4px solid #CCF0EE;
				box-sizing: border-box;
				span{
					display: block;
					font-size: 18px;
					font-family: "Regular";
					color: #ffffff;
					white-space: nowrap;
				}
			}
			&__text{
				display: block;
				color: #ffffff;
				font-family: "Light";
				margin-top: 25px;
				font-size: 15px;
				line-height: 21px;
			}
		}
	}
</style>