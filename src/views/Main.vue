<template lang="">
    <Header/>
    <Main/>
    <PlonqX/>
    <Information/>
    <Footer/>
    
</template>
<script>
import Header from '../components/header.vue'
import Main from '../components/main/main.vue'
import PlonqX from '../components/main/plonq-x.vue'
import Footer from '../components/footer.vue'
import Information from '../components/main/information.vue'
export default {
    components: {Header, Main, Footer, PlonqX, Information},
}
</script>
<style lang="scss">
    
</style>