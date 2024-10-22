<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="counter = counter + 1">Plus</button>
    <button @click="counter = counter - 10">Minuse</button>
  </div>
</template>
<script setup lang="ts">
const counter = ref<number>(0);
</script>
