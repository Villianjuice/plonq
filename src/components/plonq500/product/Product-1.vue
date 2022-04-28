<template lang="">
    <section class="product-1">
      <div class="container">
        <div class="center">
          <div class="product-1-block">
            <div class="product-1-block__logo">
              <img src="@/assets/img/Logo-Plonq-500.svg" alt="logo">
            </div>
            <p>
              <span>Новый стандарт</span>
              <br> одноразовых е-сигарет						 
            </p>
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
  @import '@/assets/base.css';
  @import '@/assets/index.scss';
  .product-1{
    height: calc(100vh - 64px);
    max-height: 1080px;
    min-height: 1014px;
    background: #f2f2f2;
    background-image: url('@/assets/img/plonq500.webp');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 100%;
    overflow: hidden;
    width: 100%;
    .container{
      max-width: 1146px;
      padding: 0 20px;
      box-sizing: border-box;
      
    }
    .center{
        height: calc(100vh - 64px);
        max-height: 1080px;
    }
    &-block{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;
      padding-top: 106px;
      &__logo{
        margin-bottom: 30px;
      }
    }
    p{
      font-family: "Roboto";
      font-weight: 400;
      font-size: 26px;
      line-height: 31px;
      color: #525151;
      margin: 0;
    }
  }
  
</style>