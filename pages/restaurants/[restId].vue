<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>{{ restaurant?.name }}</h1>
      <h1>{{ restaurant?.content }}</h1>
      <h1>{{ restaurant?.rank }}</h1>
      <div>
        <img
          style="width: fit-content; object-fit: contain"
          :src="restaurant?.imageUrl"
          alt="{{restaurant.name}}"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import restaurants from "@/data.json";

const { params } = useRoute();
const restId = computed(() => params.restId);

const restaurant = computed(() =>
  restaurants.find((item) => item.name === restId.value)
);
</script>

<style scoped></style>
