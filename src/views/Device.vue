<template lang="">
    <div>
        <Header/>
        <main class="device">
        <section c>
            <div class="container1">
                <div class="box1_word">
                    <h1 class="box1_h1">Проблема</h1>
                    <br>
                    <p class="box1_p1">Исследования показывают, что во всем мире около 1 млрд курильщиков, 70% из них хотят бросить курить, 40% действительно пытаются это сделать хотя бы раз в год, но достигают успеха только 5%.</p>
                    <br>
                    <p class="box1_p2">Почему показатель успеха такой низкий? Ответ прост: существующие методы отказа от курения — не эффективны.</p>
                    <br>
                    <p class="box1_p3">Большинство из них основано на медикаментах, заменителях никотина или силе воли. Такие методы редко помогают, а частота рецидивов после них высока.</p>
                    <br>
                    <p class="box1_p4">Все еще думаете бросить за один день?</p>
                    
                </div>
                <img src="../img/pie-chart-x1.webp" alt="" class="img1_box1">

            </div>
        </section>

        <section>
            <div class="container2">
                <h1 class="box2_h1">Сравнение решений</h1>
                <img class="img1_box2" src="../img/linear-graph.webp" alt="">
                <div class="circle1_box2"><p>Мобильные приложения на основе поведенческой терапии</p></div>
                <div class="circle2_box2"><p>Никотино-заменительная терапия</p></div>
                <div class="circle3_box2"><p>Медикаменты (Табекс, Чампикс и др.)</p></div>
                <a class="a1_box2" href="https://www.bbc.com/ukrainian/blogs-russian-44911531"><p>Читать иследованние</p></a>
                <img class="adap_img1" src="../img/More1 1-1.png" alt="">
            </div>
        </section>

        <section>
            <div class="container3">
                <div class="box3_word">
                    <h1 class="h1_word">Цифровой терапевт</h1>
                    <br>
                    <p class="p1_box3">PLONQ AI создан на основе поведенческой терапии, которая доказала свою эффективность.</p>
                    <br>
                    <p class="p2_box3">Алгоритм изучит вашу привычку к курению и поможет плавно снизить интенсивность вплоть до полного отказа, избегая симптомов отмены.</p>
                    <img class="img1_box3" src="../img/Group 1091 (1).png" alt="">
                </div>
            </div>
        </section>

        <section>
            <div class="container4">
                <h1 class="word1_box4">Как это работает</h1>
                <div class="box4_content">
                    <img class="box4_img1" src="../img/item-1-x1.webp" alt="">
                    <h1 class="box4_content_word1">Plonq Ai изучает Вас</h1>
                    <p class="box4_content_p2">Первую неделю курите в привычном для себя ритме, пока алгоритм изучит вашу привычку.</p>
                </div>
            </div>
        </section>

        <section>
            <div class="box5_word">
                <h1 class="h1_box5">Обновление</h1>
                <br>
                <p class="p_box5">Раз за разом мы будем обновлять Plonq AI и делать управление курением все более эффективным.</p>
                <br>
                <p class="p2_box5">Для этого вам не нужно покупать новые устройства. Мы обо всем позаботились.</p>
                <br>
                <p class="p3_box5">Просто обновите PLONQ AI через мобильное приложение.</p>
            </div>
            <img src="../img/renewal_img-mobile-1x.webp" alt="" class="box5_img">
        </section>
    </main>

    </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
    components: {Header, Footer},
}
</script>
<style lang="scss">
    .device{
        width: 1400px;
        display: flex;
    align-items: center;
    justify-content: center;
    }
    .box1_word{
        color: #000000;
        position: absolute;
        width: 408px;
        height: 84px;
        left: 176px;
        top: 411px;
    }
    .box1_word h1{
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
    }
    .img1_box1{
        position: absolute;
        top: 390px;
        left: 576px;
    }
    .box2_h1{
        position: absolute;
        width: 474px;
        height: 45px;
        left: 176px;
        top: 1021px;
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
        color: #000000;
    }
    .img1_box2{
        position: absolute;
        width: 652.98px;
        height: 530.58px;
        left: 126px;
        top: 1126px;
    }
    .circle1_box2{
        position: absolute;
        left: 912px;
        top: 1326px;
        border-radius: 50%;
        background: #BEAD7E;
        width: 12px;
        height: 12px;
    }
    .circle1_box2 p {
        position: absolute;
        top: -4.5px;
        left: 20px;
        width: 390px;
    }
        .circle2_box2{
        position: absolute;
        left: 912px;
        top: 1356px;
        border-radius: 50%;
        background: rgba(32, 179, 139, 0.5);;
        width: 12px;
        height: 12px;
    }
    .circle2_box2 p {
        position: absolute;
        top: -4.5px;
        left: 20px;
        width: 390px;
    }
        .circle3_box2{
        position: absolute;
        left: 912px;
        top: 1386px;
        border-radius: 50%;
        background: rgba(167, 51, 71, 0.6);
        width: 12px;
        height: 12px;
    }
    .circle3_box2 p {
        position: absolute;
        top: -4.5px;
        left: 20px;
        width: 390px;
    }
    .a1_box2{
        position: absolute;
        top: 1456px;
        left: 912px;
        font-size: 16px;
        line-height: 24px;
        font-family: "Regular, Arial, sans-serif";
        border: 1px solid #000;
        border-radius: 25px;
        max-width: 210px;
        width: 100%;
        background-color: #fff;
        cursor: pointer;
        color: #000;
        text-align: center;
        padding: 8px 0;
        margin-left: 16px;
        margin-top: 25px;
        text-decoration: none;
    }
    .a1_box2:hover{
        background: black;
        transition: 0.5s;
    }
    .a1_box2 p:hover{
        color: white;
    }
    .container3{
        position: absolute;
        width: 1130px;
        height: 1080px;
        left: 176px;
        top: 1890px;
        background: #F9F9F9;
        margin: 0 auto;
    }
    .container1, .container2, .container4{
        margin: 0 auto;
    }
    .box3_word{
        position: absolute;
        top: 504px;
        left: 55px;
    }
    .box3_word h1 {
        width: 444px;
        height: 45px;
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
        color: #000000;
    }
    .p1_box3{
    width: 448px;
    height: 42px;
    font-family: '"Regular", Arial, sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #000000;
    }
    .p2_box3{
    width: 448px;
    height: 42px;
    font-family: '"Regular", Arial, sans-serif';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #000000;
    }
    .img1_box3{
        position: absolute;
        width: 558px;
        height: 664px;
        left: 478px;
        top: -230px;
    }
    .word1_box4{
        position: absolute;
        left: 592px;
        top: 3220px;
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
        text-align: center;
        color: #000000;
    }
    .box4_content{
        position: absolute;
        width: 1128px;
        height: 720px;
        left: 176px;
        top: 3307px;
        background: #F9F9F9;
    }
    .box4_img1{
        position: absolute;
        left: 234px;
        top: 100px;
    }
    .box4_content_word1{
        position: absolute;
        width: 272px;
        height: 90px;
        left: 675px;
        top: 330px;
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
        color: #000000;
    }
    .box4_content_p2{
        position: absolute;
        width: 272px;
        height: 68px;
        left: 675px;
        top: 440px;
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 21px;
        color: #000000;
    }
    .box5_word{
        position: absolute;
        left: 176px;
        top: 4350px;
        width: 416px;
        height: 168px;
    }
    .box5_img{
        position: absolute;
        left: 676px;
        top: 4150px;
        width: 500px;
        height: 650px;
    }
    .box5_word h1{
        font-family: '"Regular", Arial, sans-serif';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 45px;
        color: #000000;
    }
    .adap_img1{
        display: none;
    }
    
    @media (max-width: 600px) {
        .box1_word{
            position: absolute;
            left: 15px;
            font-size: 12px;
            width: 270px;
        }
        .img1_box1{
            width: 350px;
            height: 300px;
            position: absolute;
            left: -10px;
            top: 800px;
        }
        .img1_box2{
            display: none;
        }
        .box2_h1{
            position: absolute;
            left: 15px;
            font-size: 30px;
            top: 1230px;
        }
        .circle1_box2{
            position: absolute;
            left: 15px;
            font-size: 14px;
        }
        .circle2_box2{
            position: absolute;
            left: 15px;
            font-size: 15px;
        }
        .circle3_box2{
            position: absolute;
            left: 15px;
            font-size: 15px;
        }
        .adap_img1{
            display: block;
            position: absolute;
            left: 15px;
            top: 1420px;
        }
        .a1_box2{
            position: absolute;
            top:1690px;
            left: 45px;
        }
        .container1{
            max-width: 1406px;
            width: 100%;
            margin: 0 auto;
        }
        
    }
</style>