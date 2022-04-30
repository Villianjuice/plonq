<template lang="">
    <section class="product-2">
			<div class="product-2-block">
				<div class="product-2-block__content">
					<span class="product-2-block__title">ВСЕ КАК ВЫ ХОТЕЛИ </span>
					<div class="product-2-block__parallax stop">
						<img src="@/assets/img/plonq-preview.webp" alt="">
					</div>
				</div>
				<ul class="product-2-block__ul">
					<li class="product-2-block__li">
						<div class="icon">
							<img src="@/assets/img/No_Smoke_icon.svg" alt="">
						</div>
						<div class="product-2-block__li-info">
							<span class="product-2-block__li-title">Без дыма</span>
							<span class="product-2-block__li-text">Пар растворяется в воздухе и не оставляет запаха на одежде</span>
						</div>
					</li>
					<li class="product-2-block__li">
						<div class="icon">
							<img src="@/assets/img/No_Button_icon.svg" alt="">
						</div>
						<div class="product-2-block__li-info">
							<span class="product-2-block__li-title">Без кнопок</span>
							<span class="product-2-block__li-text">Plonq автоматически включается при каждой затяжке</span>
						</div>
					</li>
					<li class="product-2-block__li">
						<div class="icon">
							<img src="@/assets/img/No_Service_icon.svg" alt="">
						</div>
						<div class="product-2-block__li-info">
							<span class="product-2-block__li-title">Без обслуживания</span>
							<span class="product-2-block__li-text">Устройство не нужно подзаряжать или заполнять жидкостью</span>
						</div>
					</li>
					<li class="product-2-block__li">
						<div class="icon">
							<img src="@/assets/img/No_Loose.svg" alt="">
						</div>
						<div class="product-2-block__li-info">
							<span class="product-2-block__li-title">Не страшно потерять</span>
							<span class="product-2-block__li-text">Предназначены для одноразового использования</span>
						</div>
					</li>
				</ul>

			</div>
		</section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
	
	.product-2{
		background: #F2F2F2;
		padding-top: 260px;
		padding-bottom: 140px;
		&-block{
			width: 100%;
			max-width: 1108px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&__content{
				display: flex;
    		align-items: center;
			}
			&__title{
				display: block;
				font-family: "Roboto";
				font-size: 28px;
				line-height: 34px;
				color: #464646;
				margin-right: 122px;
				margin-top: 43px;
			}
			&__parallax{
				position: static;
    		top: auto;
				img{
					width: 120px;
				}
			}
			.stop{
				position: relative;
    		z-index: 101;
			}
			&__ul{
				margin-top: 50px;
			}
			&__li{
				display: flex;
				justify-content: space-between;
				margin-bottom: 50px;
				&-info{
					max-width: 293px;
					display: flex;
					flex-direction: column;
					margin-left: 56px;
					width: 100%;
				}
				&-title{
					display: block;
					font-family: "Regular";
					font-size: 23px;
					line-height: 24px;
					color: #494949;
					margin-bottom: 20px;
					font-weight: 500;
				}
				&-text{
					display: block;
					font-family: "Roboto";
					font-size: 15px;
					font-weight: 400;
					line-height: 21px;
					color: #494949;
				}
			}
			.icon{
				display: flex;
				justify-content: center;
				min-width: 48px;
				img{
				min-width: 48px;

				}
			}
		}
	}
	
</style>