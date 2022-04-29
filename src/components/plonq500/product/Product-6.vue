<template lang="">
  <section class="product-6">
    <div class="container">
      <div class="product-6__block">
        <div class="product-6-top">
          <span class="num">04</span>
          <span class="tit">КАЧЕСТВЕННЫЕ КОМПОНЕНТЫ</span>
        </div>
        <div class="product-6-content">
          <div class="product-6-content__left-wrapper">
            <img src="@/assets/img/image_components-1x.webp" class="product-6-content__left"/>
          </div>
          <ul class="product-6-content__right">
            <li class="product-6-content__right-li">
              <div class="icon">
                <img src="@/assets/img/Сotton_icon.svg" class="product-6-content__icon"/>
              </div>
              <span class="product-6-content__right-text">Для хранения жидкости в устройстве мы используем японский хлопок</span>
            </li>
            <li class="product-6-content__right-li">
              <div class="icon">
                <img src="@/assets/img/Controller_icon.svg" class="product-6-content__icon"/>
              </div>
              <span class="product-6-content__right-text">Новейший микроконтроллер Segger 3856-G обеспечивает стабильный вкус на протяжении  всего процесса парения</span>
            </li>
            <li class="product-6-content__right-li">
              <div class="icon">
                <img src="@/assets/img/Сotton_icon.svg" class="product-6-content__icon"/>
              </div>
              <span class="product-6-content__right-text">Качественная батарейка из чистого кобальта добросовестно выдерживает 500 затяжек</span>
            </li>
            <li class="product-6-content__right-li">
              <div class="icon">
                <img src="@/assets/img/Plastic_icon.svg" class="product-6-content__icon"/>
              </div>
              <span class="product-6-content__right-text">Корпус устройства изготовлен из качественного PCTG пластика, который не выделяет токсины при нагревании</span>
            </li>
          </ul>
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
  .product-6 {
    background-color: #F2F2F2;
    padding-top: 147px;
    padding-bottom: 170px;
    .container{
      max-width: 1260px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    &__block{
      width: 100%;
    }
    &-top{
      display: flex;
      align-items: center;
      margin-bottom: 140px;
      .num{
        display: block;
        font-size: 69px;
        line-height: 66px;
        color: #464646;
        font-family: "Medium";
        margin-right: 20px;
      }
      .tit{
        display: block;
        font-size: 28px;
        line-height: 34px;
        color: #494949;
        font-family: "Light";
      }
    }
    &-content{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1200px;
      &__left{
        position: static;
        top: auto;
        margin-right: 240px;
      }
      &__right{
        margin-top: 10px;
        &-li{
          display: flex;
          align-items: center;
          margin-bottom: 70px;
        }
        &-text{
          font-family: "Light";
          display: block;
          max-width: 480px;
          font-size: 18px;
          line-height: 21px;
          color: #494949;
        }
      }
      .icon{
        width: 40px;
        margin-right: 52px;
      }
      &__icon{
        width: 44px;
        height: 44px;
      }
    }
  }
</style>