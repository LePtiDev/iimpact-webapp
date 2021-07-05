<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";
import Footer from "./components/Footer.vue"

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style lang="scss">
    @import "scss/init";
</style>
