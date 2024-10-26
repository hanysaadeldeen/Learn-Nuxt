<script setup lang="ts">
interface RawProps {
  name: string;
  index: number;
  rank: number;
}

defineProps<RawProps>();
</script>

<template>
  <div
    class="row"
    :style="index % 2 === 0 && { background: 'rgba(128,128,128,0.15)' }"
  >
    <h4 class="header rank">{{ rank }}</h4>
    <NuxtLink :to="`/restaurants/${name}`" class="header link">{{
      name
    }}</NuxtLink>
  </div>
</template>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}
.header {
  font-size: 1.25rem;
  color: rgb(10, 31, 148);
  margin: 0;
  margin-right: 2rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  width: 4rem;
}
.rank {
  color: black;
}
.link {
  text-decoration: none;
  color: rgb(228, 157, 27);
  width: auto;
  font-weight: 500;
}
</style>
