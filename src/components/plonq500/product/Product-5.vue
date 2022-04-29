<template lang="">
  <div class="product-5">
    <div class="container">
      <div class="product-5__block">
        <div class="product-5__content">
          <div class="product-5-top">
            <span class="product-5-top__num">03</span>
            <span class="product-5-top__tit">МЯГКИЙ ПАР</span>
          </div>
          <div class="product-5-content">
            <span>
              Разделение люминарного потока  
              <br>
              с фильтром 360°, обеспечивает  
              <br>
              комфортную температуру пара, делая 
              <br>
              парение по-настоящему мягким.
            </span>
          </div>
        </div>
        <div class="product-5__image">
          <img src="@/assets/img/image-smoke-1x.webp" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .product-5{
    background-color: #000000;
    overflow: hidden;
    .container{
      max-width: 1220px;
    }
    &__block{
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
    }
    &-top{
      display: flex;
      align-items: center;
      &__num{
        display: block;
        font-size: 69px;
        line-height: 66px;
        color: #ffffff;
        font-family: "Medium";
        margin-right: 27px;
      }
      &__tit{
        display: block;
        font-family: "Light";
        font-size: 28px;
        line-height: 34px;
        color: #ffffff;
      }
    }
    &-content{
      margin-top: 90px;
      span{
        display: block;
        font-size: 20px;
        line-height: 27px;
        max-width: 410px;
        min-width: 400px;
        margin-left: 118px;
        color: #ffffff;
        font-family: "Light";
      }
    }
    &__image{
      font-size: 0;
      transform: translate(-28px, 0px);
    }
  }
</style>