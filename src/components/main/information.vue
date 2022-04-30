<template lang="">
  <section class="information">
    <div class="container-two">
      <div class="information-block">
        <div class="information-block__col">
          <div class="information-card information-card__el1">
            <div class="information-card__content">
              <span class="information-card__title">
                Об электронных
                <br>
                сигаретах
              </span>
              <span class="information-card__text">Plonq — электронный испаритель, который преобразует жидкость в пар.</span>
              <router-link to="/plonq500" class="main-screen-block__link-a link-style link-style--black">Подробнее ➜</router-link>
            </div>
            <img src="../../assets/img/plonq-desk.webp" alt="" class="information-card__image-A">
          </div>
        </div>
        <div class="information-block__col">
          <div class="information-card information-card__el1">
            <div class="information-card__content">
              <span class="information-card__title">
                О приложении
              </span>
              <span class="information-card__text">Plonq AI создан на основе поведенческой терапии, которая доказала свою эффективность.</span>
              <router-link to="/device" class="main-screen-block__link-a link-style link-style--black">Подробнее ➜</router-link>
            </div>
            <img src="../../assets/img/image_APP.webp" style="height:358px" alt="" class="information-card__image-A">
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
  .information{
    padding-bottom: 30px;
    .container-two {
      margin: auto;
      max-width: 1400px;
      width: 100%;
    }
    &-block{
      margin: 15px -8px 0;
      display: flex;
      justify-content: space-between;
      &__col{
        width: 50%;
        padding: 0 8px;
      }
    }
    &-card{
      box-sizing: border-box;
      position: relative;
      padding-top: 42px;
      padding-left: 120px;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #F9F9F9;
      &__content{
        max-width: 328px;
        padding-bottom: 30px;
        margin-right: 45px;
        .link-style{
          color: black;
        }
      }
      &__title{
        display: block;
        font-size: 22px;
        line-height: 24px;
        color: #353438;
        font-family: "Regular";
        margin-bottom: 36px;
      }
      &__text{
        display: block;
        font-family: "Light";
        font-size: 17px;
        margin-bottom: 58px;
        line-height: 1.4;
      }
    }
  }
</style>