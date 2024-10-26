<template>
  <div class="container mt-5">
    <div class="mx-auto text-center">
      <h1>Welcome to Restaurant</h1>
      <router-link to="/restaurants">Go To Restorant</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Restaurant",
  meta: [{ name: "description", content: "Welcome to Restaurant" }],
});
</script>
