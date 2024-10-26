<template>
  <Navbar />

  <div class="container mt-5">
    <div class="mx-auto text-center">
      <h1>{{ statusCode }} page not found</h1>
      <p>{{ error?.message }}</p>
      <router-link to="/">Go To Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError();
const statusCode = computed(() => error.value?.statusCode);
</script>
