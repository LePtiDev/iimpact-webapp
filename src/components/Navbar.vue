<template>
    <nav class="nav">
        <div class="logo">
            <img src="../assets/logos/logo.svg" alt="Logo iimpact">
        </div>
        <ul class="container-links">
            <li ref="Home"
                @mouseenter="setIndicatorPosition('Home')"
                @mouseleave="setIndicatorPosition($route.name)"
                @click="navigate('Home')"
            >Accueil</li>
            <li ref="Members"
                @mouseenter="setIndicatorPosition('Members')"
                @mouseleave="setIndicatorPosition($route.name)"
                @click="navigate('Members')"
            >Membres</li>

            <li ref="Events"
                @mouseenter="setIndicatorPosition('Events')"
                @mouseleave="setIndicatorPosition($route.name)"
                @click="navigate('Events')"
            >Évènements</li>

            <li ref="Blog"
                @mouseenter="setIndicatorPosition('Blog')"
                @mouseleave="setIndicatorPosition($route.name)"
                @click="navigate('Blog')">Blog</li>

            <div :style="indicatorclass" class="indicator"></div>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            indicatorclass: "",
        }
    },
    mounted() {
        this.setIndicatorPosition(this.$route.name)
    },
    methods: {
        setIndicatorPosition(route){
          let width = " width: " + (this.$refs[route].offsetWidth - 90) + "px;"
          let position = "left: " + (this.$refs[route].offsetLeft + 95) + "px;"
          this.indicatorclass = width + position
        },
        navigate(route){
            this.$router.push({name: route})
            this.setIndicatorPosition(route)
        }
    }
}
</script>
<style lang="scss">

</style>