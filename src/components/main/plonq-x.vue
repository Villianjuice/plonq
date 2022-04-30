<template lang="">
  <section class="plane-x">
    <div class="container">
      <div class="plane-x-block">
        <div class="plane-x-left">
          <img src="../../assets/img/plane-x.svg" alt="" class="plane-x-left__img">
          <span class="plane-x-left__title">Электронная сигарета, которая умеет удивлять.</span>
          <div class="plane-x-left__links">
            <router-link to="/plonq500" class="main-screen-block__link-a link-style link-style--black">Подробнее ➜</router-link>
            <span class="plane-x-left__info">Скоро в продаже</span>
          </div>
        </div>
        <img src="../../assets/img/phone_gold2_1.webp" alt="" class="plane-x-right plane-x-right--desctop">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .plane-x{
    padding-top: 200px;
    padding-bottom: 93px;
    &-block{
      display: flex;
      align-items: center;
      width: 100%;
    }
    &-left{
      display: flex;
      flex-direction: column;
      padding-left: 140px;
      &__img{
        width: 254px;
        margin-bottom: 60px;
      }
      &__title{
        display: block;
        font-family: "Light";
        font-weight: 300;
        font-size: 26px;
        line-height: 31px;
        color: #353438;
        max-width: 390px;
        margin-bottom: 71px;
      }
      &__links{
        display: flex;
        align-items: center;
        .link-style {
          color: #000;
        }
      }
      &__info{
        display: block;
        font-family: "Regular";
        font-size: 15px;
        line-height: 21px;
        color: #C8B093;
      }
    }
    &-right{
      margin-left: 81px;
      display: block;
    }
  }
</style>