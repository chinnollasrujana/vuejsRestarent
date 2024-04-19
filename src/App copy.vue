<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <div class="wrapper">
    <!-- <HelloWorld msg="You did it!" /> -->

    <main>
      <RouterView />
    </main>
  </div>
  <Footer></Footer>
</template>

<style></style>
