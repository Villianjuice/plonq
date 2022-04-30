<template lang="">
  <header class="header">
    <div class="layout header__wrapper">
      <div class="header__logo">
        <router-link to="/" class="logo">
          <img src="../assets/img/logo.svg" alt="">
        </router-link>
      </div>
      <div class="header__menu">
        <ul class="menu">
          <li class="menu__li">
            <router-link to="/plonq500" class="menu__link">Продукты</router-link>
          </li>
          <li class="menu__li">
            <router-link to="/device" class="menu__link">Приложение</router-link>
          </li>
          <li class="menu__li">
            <router-link to="/contact" class="menu__link">Дистрибуция</router-link>
          </li>
          <li class="menu__li">
            <a href="#" class="menu__link">Где купить</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .header {
    padding: 10px;
    width: 100%;
    min-height: 64px;
    z-index: 1000;
    background: #fff;
    .layout{
      max-width: 1440px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 20px;
      padding-right: 20px;
    }
    &__wrapper{
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding-top: 14px;
      padding-bottom: 15px;
      min-height: 64px;
    }
    &__logo{
      position: relative;
      top: 2px;
    }
    &__menu{
      .menu{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        &__li{
          position: relative;
          &:not(:first-child){
            margin-left: 124px;
          }
        }
        &__link{
          font-family: Roboto,sans-serif;
          font-size: 13px;
          line-height: 12px;
          color: #000;
          -webkit-transition: all .18s ease-out;
          -o-transition: all .18s ease-out;
          transition: all .18s ease-out;
        }
      }    
    }
  }
</style>