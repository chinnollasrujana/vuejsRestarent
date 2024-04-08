<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>

<template>
    <Header></Header>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <HelloWorld></HelloWorld>
     
    </div>
    <Footer></Footer>

</template>

<style>


</style>
