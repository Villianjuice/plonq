<template lang="">
  <section class="product-7">
    <div class="container">
      <div class="product-7__block">
        <div class="product-7-top">
          <span class="num">05</span>
          <span class="tit">БЕЗОПАСНЫЙ СОСТАВ ЖИДКОСТИ</span>
        </div>
        <div class="product-7-content">
          <span>Каждый вкус проходит «Токсикологический анализ» в независимой лаборатории «Ingesciences» во Франции.</span> 
          <span>Только убедившись в безопасности, мы допускаем вкус к продаже.</span>
          <img src="../../../assets/img/logo_Ingésciences.svg" alt="">
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
  .product-7 {
    position: relative;
    padding-top: 153px;
    padding-bottom: 18vw;
    background-color: #F2F2F2;
    overflow: hidden;
    background-image: url('@/assets/img/b.webp');
    background-position-x: right;
    background-position-y: top;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .container{
      max-width: 1262px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    &__block{
      width: 100%;
    }
    &-top{
      display: flex;
      align-items: center;
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
      flex-direction: column;
      margin-top: 98px;
      margin-left: 118px;
      span{
        display: block;
        max-width: 380px;
        margin-bottom: 25px;
        font-family: "Light";
        font-size: 20px;
        line-height: 27px;
        color: #494949;
      }
      img{
        margin-top: 110px;
        width: 80px;
      }
    }
  }
</style>