<template>
    <div id="app">

        <!--    Burger menu    -->
        <div class="burger-nav" @click="openMenu = true, console.log('test')">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>

        <Navbar></Navbar>
        <BurgerMenu></BurgerMenu>
        <pre>{{ openMenu }}</pre>
        <router-view class="pages"/>
    </div>
</template>

<script>

import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";

export default {
    components: {
        Navbar,
        BurgerMenu
    },
    data (){
        return{
            openMenu: false,
        }
    },
}
</script>

<style lang="scss">
    @import "scss/init";
</style>
