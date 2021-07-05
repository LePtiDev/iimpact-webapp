<template>
  <footer>
    <img src="../assets/logos/logo_blanc.svg" alt="logo iimpact" id="logo" />
    <div class="footer_nav">
      <router-link to="home">Accueil</router-link>
      <router-link to="membres">Membres</router-link>
      <router-link to="evenements">Évènements</router-link>
      <router-link to="blog">Blog</router-link>
    </div>
    <div class="last_events">
      <p id="events">Derniers évènements</p>
      <p>lorem ipsum</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
