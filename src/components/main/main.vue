<template lang="">
  <section class="main-screen">
    <div class="container">
      <div class="main-screen__position">
        <div class="main-screen-block">
          <div class="main-screen-block">
            <div class="main-screen-block__logo">
              <img src="../../assets/img/ploq-logo-screen.svg" alt="">
            </div>
            <span class="main-screen-block__text">
              Новый стандарт
              <br>
              одноразовых е-сигарет.
            </span>
            <div class="main-screen-block__link">
              <router-link to="/plonq500" class="main-screen-block__link-a">Подробнее → </router-link>
              <router-link to="/"  class="button button--border-white">Где купить</router-link>
            </div>
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
  .main-screen{
    height: 100vh;
    min-height: 1008px;
    background-image: url('@/assets/img/background-main.webp');
    background-size: cover;
    background-position: center -64px;
    background-attachment: scroll;
    background-repeat: no-repeat;
    .container{
      max-width: 916px;
    }
    &__position{
      position: relative;
      display: flex;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      height: calc(100vh - 104px);
      min-height: 966px;
    }
    &-block{
      margin-bottom: 200px ;
      margin-top: 1.9vw;
      &__logo{
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 58px;
      }
      &__text{
        display: block;
        font-family: "Light";
        font-size: 26px;
        line-height: 31px;
        color: #ffffff;
        margin-bottom: 70px;
        letter-spacing: -0.24px;
        margin-left: 47px;
      }
      &__link{
        display: flex;
        align-items: center;
        margin-left: 48px;
        &-a{
          display: flex;
          align-items: center;
          font-family: "Regular";
          font-size: 15px;
          line-height: 21px;
          color: #ffffff;
          transition: all .25s ease-out;
          margin-right: 58px;
          letter-spacing: -0.24px;
        }
        .button--border-white{
          min-width: 150px;
          min-height: 42px;
          height: 42px;
          border-radius: 45px;
          border: 1px solid #ffffff;
          color: #fff;
        }
      }
    }
  }
</style>