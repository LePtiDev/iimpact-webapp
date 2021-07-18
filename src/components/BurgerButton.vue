<template>
    <!--    Burger menu    -->
    <div class="burger-nav" @click="OpenNav">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: "BurgerButton",
    computed: {
        deviceSize(){
            return  "height: " + window.innerHeight + "px;"
        },
    },
    methods: {
        OpenNav(){
            this.$emit("Open-nav")
        }
    }
}
</script>

<style scoped>

</style>