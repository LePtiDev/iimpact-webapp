<template>
    <div id="app">
        <Navbar :open="openMenu" @close-menu="openMenu = false"></Navbar>
        <BurgerButton @Open-nav="openMenu = true"></BurgerButton>
        <router-view class="pages"/>
    </div>
</template>

<script>

import Navbar from "./components/Navbar";
import BurgerButton from "./components/BurgerButton";

export default {
    components: {
        Navbar,
        BurgerButton
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
