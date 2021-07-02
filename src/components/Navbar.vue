<template>
    <nav class="menu">
        <div class="logo">
            <img src="../assets/logos/logo.svg" alt="Logo iimpact">
        </div>
        <div class="container-links">
            <router-link v-for="link in links" :key="link.name" :to="link.href">{{ link.name }}</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            links: [
                {
                    name: "Accueil",
                    href: "#"
                },
                {
                    name: "Membres",
                    href: "#"
                },
                {
                    name: "Évènements",
                    href: "#"
                },
                {
                    name: "Blog",
                    href: "#"
                },
            ]
        }
    }
}
</script>
<style lang="scss">

</style>