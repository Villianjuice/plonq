<template >
  <section>
    <div class="container">
      <div class="box1_word">
        <h1 class="h1_box1">Связаться с нами</h1>
        <br>
        <p class="p1_box1">Мы рады вам помочь и ответить на любые вопросы о Plonq. </p>
        <br>
        <p class="p2_box1">Напишите нам в мессенджере и мы ответим в течение 5 минут или напишите письмо на почту @plonq.ru и мы ответим не позднее чем через 24 часа.</p>
      </div>
      

      <div class="input_boxq">
        <p class="p1_input_box"> Ваше фио </p>
        <input class="input1_box1" type="text" placeholder="Ivan Petrov">
        <br>

        <p class="p2_input_box"> Номер телефона </p>
        <input class="input2_box1" type="number" placeholder="+7 777 777-77-77">
        <br>


        <p class="p3_input_box"> E-mail </p>
        <input class="input3_box1" type="text" placeholder="email@gmail.com">
        <br>

        <p class="p4_input_box"> Сообщение </p>
        <input class="input4_box1" type="text" >
      </div>

      <button class="btn1"><p>Отправить</p></button>
    </div>
    
  </section>
  
</template>
<script>
export default {
  
}
</script>
<style >
  .h1_box1{
    font-family: 'Gotham Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 28px;
    color: #000000;
  }
  .box1_word p{
    font-family: 'Gotham Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    color: #000000;
  }
  .input_boxq{
    position: absolute;
    width: 328px;
    height: 464px;
    left: 678px;
    top: 420px;
  }
  .input_boxq input{
    padding: 10px;
    width: 328px;
    height: 40px;
    background: #F9F9F9;
    border-radius: 4px;
    outline: none;
    border: none;
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.btn1{
  background: #000000;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  position: absolute;
  top: 690px;
  left: 677px;
}
.btn1 p {
  position: absolute;
  left: 34px;
  bottom: 5px;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
}




</style>