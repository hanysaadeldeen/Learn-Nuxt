<template lang="pug">
  header
    .logo
      h2:   nuxt-link(to="/") note-app
    nav
      ul
        li 
          nuxt-link(to="/" ) Home
          nuxt-link(:to="{ name: 'notes' }").mx-5 Notes
      UButton(color="red" @click="logOut" v-if="userIsLoggedIn") LogOut   

  <slot />
</template>

<script setup lang="ts">
const { logOut, isLoggedIn } = useAuth();

const userIsLoggedIn = computed(() => isLoggedIn());
</script>
<style scoped>
header {
  height: 100px;
  background-color: gray;
  color: white;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul li {
  display: inline-block;
  margin-right: 20px;
  font-size: 20px;
  list-style-type: none;
}
</style>
