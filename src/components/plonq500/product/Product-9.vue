<template lang="">
  <section class="product-9">
    <div class="container">
      <div class="product-9__block">
        <div class="product-9-top">
          <span class="num">06</span>
          <span class="tit">СТРОГИЙ КОНТРОЛЬ КАЧЕСТВА</span>
        </div>
        <div class="product-9-content">
          <span>Каждое устройство Plonq проходит контроль качества по международной системе AQL на строгом уровне S 0.4, что позволяет выдерживать количество брака менее 0.2%.
</span> 
          
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
  .product-9{
    padding-top: 110px;
    background: #F2F2F2 url('@/assets/img/background9.webp');
    background-repeat: no-repeat;
    background-position: right 87px;
    -webkit-background-size: auto 100%;
    background-size: auto 100%;
    padding-bottom: 33.9vw;
    .container{
      max-width: 1260px;
      padding: 0 20px;
      box-sizing: border-box;
    }
    &__block{
      width: 100%;
      height: 100%;
      position: relative;
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
        font-size: 20px;
        line-height: 27px;
        max-width: 420px;
        font-family: "Light";
        color: #494949;
      }
      img{
        margin-top: 110px;
        width: 80px;
      }
    }
  }
</style>