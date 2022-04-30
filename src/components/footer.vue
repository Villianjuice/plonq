<template lang="">
  <footer class="footer">
    <div class="layout">
      <div class="footer__top">
        <div class="footer__col-1">
          <a href="" class="footer__logo">
            <img src="../assets/img/logo.svg" alt="">
          </a>
        </div>
        <div class="footer__col-2">
          <div class="footer__subscribe">
            <p>Подпишитесь на наши обновления</p>
            <form action="#" class="footer__subscribe-form">
              <div class="support-input">
                <input placeholder="Укажите почту..." type="text" class="footer__subscribe-input">
              </div>
              <button class="button button--black">Подписаться</button>
            </form>
          </div>
        </div>
        <div class="footer__col-3">
          <div class="footer__lang">
            <div class="footer__lang-selected-item">
              <span class="lang-selected">Russia</span>
              <img src="../assets/img/ru.svg" alt="">
              <img style="width: 10px" src="../assets/img/arrow-down.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="footer__main">
          <div class="footer__col-1">
            <div class="footer__app">
              <a href="" class="footer__app-item">
                <div class="footer__app-icon">
                  <img src="../assets/img/Apple_icon.svg" alt="">
                </div>
                <div class="footer__app-text">
                  <p>Coming soon</p>
                  <span>for IOS</span>
                </div>
              </a>
              <a href="" class="footer__app-item">
                <div class="footer__app-icon">
                  <img src="../assets/img/Android_icon.svg" alt="">
                </div>
                <div class="footer__app-text">
                  <p>Coming soon</p>
                  <span>for Android</span>
                </div>
              </a>
            </div>
          </div>
          <div class="footer__col-2 footer__menu">
            <div class="footer__menu-item">
              <h4 class="footer__menu-head">Продукты</h4>
              <ul class="footer__menu-list">
                <li class="footer__menu-li">
                  <router-link to="/plonq500" class="footer__menu-link">Plonq 500</router-link>
                </li>
                <li class="footer__menu-li">
                  <router-link to="/plonq500" class="footer__menu-link">Plonq X</router-link>
                </li>
              </ul>
            </div>
            <div class="footer__menu-item">
              <h4 class="footer__menu-head">Технологии</h4>
              <ul class="footer__menu-list">
                <li class="footer__menu-li">
                  <router-link to="/device" class="footer__menu-link">О приложении</router-link>
                </li>
                <li class="footer__menu-li">
                  <router-link to="/device" class="footer__menu-link">Об электронных сигаретах</router-link>
                </li>
              </ul>
            </div>
            <div class="footer__menu-item">
              <h4 class="footer__menu-head">Поддержка</h4>
              <ul class="footer__menu-list">
                <li class="footer__menu-li">
                  <router-link to="/contact" class="footer__menu-link">Связаться с нами</router-link>
                </li>
                <li class="footer__menu-li">
                  <router-link to="/contact" class="footer__menu-link">Условия возврата</router-link>
                </li>
                <li class="footer__menu-li">
                  <router-link to="/contact" class="footer__menu-link">Политика конфиденциальности  </router-link>
                </li>
              </ul>
            </div>
            <div class="footer__menu-item">
              <h4 class="footer__menu-head">Прочее</h4>
              <ul class="footer__menu-list">
                <li class="footer__menu-li">
                  <a href="" class="footer__menu-link">Точки продаж</a>
                </li>
                <li class="footer__menu-li">
                  <a href="" class="footer__menu-link">О Компании</a>
                </li>
                <li class="footer__menu-li">
                  <a href="" class="footer__menu-link">Оптовым покупателям</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__col-3">
            <div class="footer__copy">
              <p>© 2021 PLONQ LLC
                <br> 40900 Woodward Avenue Suite
              </p>
            </div>
          </div>
      </div>
      <div class="footer__desc">
      </div>
      
    </div>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .footer{
    background: #fff;
    padding: 100px 0 58px;
    &__top{
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    &__col{
      &-1{
        min-width: 360px;
      }
      &-2{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
      }
      &-3{
        min-width: 250px;
      }

    }
    &__subscribe{
      font-family: Roboto,sans-serif;
      font-size: 14px;
      line-height: 21px;
      color: #000;
      p{
        margin-bottom: 29px;
      }
      &-form{
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .support__input{
          margin-bottom: 0;
        }
        .button{
          margin-left: 24px;
          background: #4C4C4C;
          padding: 6px 10px;
          color: white;
          &:hover{
            background: white;
            border: 1px solid #4C4C4C;
            color: #4C4C4C;
          }
        }
      }
      &-input{
        height: 40px;
        min-width: 420px;
        background: #f9f9f9;
        border-radius: 4px;
        padding: 5px 10px;
        font-family: GothamPro,sans-serif;
        font-size: 14px;
        line-height: 21px;
        color: #000;
        border: none;
      }

    }
    &__lang{
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      position: relative;
      &-selected-item{
        width: 175px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        user-select: none;
        cursor: pointer;
        .lang-selected{
          font-size: 13px;
          font-weight: 400;
          font-family: 'Regular';
          padding-top: 3px;
          color: #828282;
        }
        img{
          margin-left: 12px;
        }
      }
    }
    &__main{
      display: flex;
      margin-top: 105px;
      margin-bottom: 85px;
    }
    &__col{
      &-1{
        min-width: 360px;
      }
    }
    &__app{
      &-item{
        display: flex;
        &:not(:last-child){
        margin-bottom: 48px;
      }}
      &-icon{
        min-width: 30px;
        margin-right: 15px;
      }
      &-text{
        font-family: Roboto,sans-serif;
        font-size: 14px;
        line-height: 21px;
        color: #000;
      }
      &-2{
        flex: 1;
        width: 100%;
      }
    }
    &__menu{
      display: flex;
      &-item{
        width: 25%;
      }
      &-head{
        font-family: Roboto,sans-serif;
        font-size: 14px;
        line-height: 21px;
        color: #000;
        margin-bottom: 30px;
      }
      &-list{
        max-width: 160px;
      }
      &-li{
        &:not(:last-child){
          margin-bottom: 17px;
        }
      }
      &-link{
        font-family: Roboto,sans-serif;
        font-size: 13px;
        line-height: 21px;
        color: #828282;
        -webkit-transition: all .2s ease-out;
        -o-transition: all .2s ease-out;
        transition: all .2s ease-out;
      }
    }
  }
</style>