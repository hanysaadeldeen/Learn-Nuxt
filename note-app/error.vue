<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template lang="pug">
  div(style='position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);')
    h2 hany
    h1 {{ error?.statusCode }}
    NuxtLink(to="/") Go back home
  
</template>
