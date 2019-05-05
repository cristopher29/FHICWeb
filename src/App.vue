<!--Template HTML-->

<template>

  <div id="app">

    <Header/>

    <div class="container">
      <router-view></router-view>
    </div>

    <Footer/>

  </div>
</template>


<!--Scripts-->
<script>

import Header from "./views/Header";
import Footer from "./views/Footer";

export default {
  name: 'app',
  components: {Footer, Header},
}
</script>

<style>

</style>
