<template>
    <div class="menu-mobile" :style="deviceSize">
        <!--    Mobile menu    -->
        <div class="nav-mobile" :class="menuIsOpen" @click="menu = false">
            <div class="container-link-mobile">
                <div class="cross-burger" @click="menu = false"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BurgerMenu",
    props: {
      menu: Boolean,
    },
    computed: {
        menuIsOpen(){
            if(this.menu){
                return "nav-mobile-open"
            }
            else{
                return " "
            }
        },
        deviceSize(){
            return  "height: " + window.innerHeight + "px;"
        }
    }
}
</script>

<style scoped>

</style>