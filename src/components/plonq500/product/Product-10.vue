<template lang="">
  <section class="product-10">
    <div class="container">
      <div class="product-10__block">
        <span class="product-10__title">ХАРАКТЕРИСТИКИ</span>
        <div class="product-10__mob-wrapper">
          <div class="product-10__mob">
            <div class="product-10-content">
              <div class="product-10-content__card">
                <div class="product-10-content__card-icon">
                  <img src="../../../assets/img/battery.svg" alt="">
                </div>
                <div class="product-10-content__card-info">
                  <span class="title">Батарейка</span>
                  <span class="text">370 мАч  </span>
                </div>
              </div>
              <div class="product-10-content__card">
                <div class="product-10-content__card-icon">
                  <img src="../../../assets/img/No_Smoke_icon (1).svg" alt="">
                </div>
                <div class="product-10-content__card-info">
                  <span class="title">Затяжки</span>
                  <span class="text">до 500  </span>
                </div>
              </div>
              <div class="product-10-content__card">
                <div class="product-10-content__card-icon">
                  <img src="../../../assets/img/Vector.svg" alt="">
                </div>
                <div class="product-10-content__card-info">
                  <span class="title">Жидкость</span>
                  <span class="text">2 мл  </span>
                </div>
              </div>
              <div class="product-10-content__card">
                <div class="product-10-content__card-icon">
                  <img src="../../../assets/img/₽.svg" alt="">
                </div>
                <div class="product-10-content__card-info">
                  <span class="title">РРЦ</span>
                  <span class="text">430 рублей  </span>
                </div>
              </div>
              <div class="product-10-content__card">
                <div class="product-10-content__card-icon">
                  <img src="../../../assets/img/nik.svg" alt="">
                </div>
                <div class="product-10-content__card-info">
                  <span class="title">Никотин</span>
                  <span class="text">20 мг  </span>
                </div>
              </div>
            </div>
          </div>
          <img class="product-10-img" src="@/assets/img/a.webp" alt="">
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
  .product-10{
    background-color: #000000;
    &__block{
      width: 100%;
      position: relative;
      height: 100%;
    }
    &__title{
      padding-top: 198px;
      display: block;
      font-size: 28px;
      line-height: 34px;
      font-family: "Light";
      color: #ffffff;
      margin-left: 107px;
    }
    &__mob{
      &-wrapper{
        display: flex;
      }
    }
    &-content{
      margin-top: 172px;
      display: flex;
      flex-wrap: wrap;
      max-width: 588px;
      justify-content: space-between;
      width: 100%;
      margin-left: 104px;
      &__card{
        display: flex;
        align-items: center;
        margin-bottom: 95px;
        width: 100%;
        max-width: 220px;
        &-icon {
          width: 40px;
          display: flex;
          justify-content: center;
          margin-right: 40px;
          img{
            margin-right: 5px;
          }
        }
        &-info{
          display: flex;
          flex-direction: column;
          color: #ffffff;
          font-size: 18px;
          .title{
            display: block;
            font-family: "Regular";
            font-size: 20px;
            line-height: 24px;
          }
          .text{
            display: block;
            font-family: "Light";
            margin-top: 11px;
            font-size: 20px;
            line-height: 27px;
          }
        }
      }
    }
    &-img{
      width: 181px;
      margin-left: 215px;
      margin-top: 5px;
    }
  }
</style>