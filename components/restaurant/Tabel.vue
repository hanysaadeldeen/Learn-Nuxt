<script setup lang="ts">
import restaurants from "@/data.json";

onMounted(() => {
  console.log([...restaurants].splice(0, 25));
  console.log([...restaurants].splice(25, 25));
});
const restaurantsOrganized = {
  first: [...restaurants].splice(0, 25),
  second: [...restaurants].splice(25, 25),
};
</script>

<template>
  <div class="table">
    <h1>TOP 50: THE RANKING</h1>
    <div class="table-container">
      <div class="table-col">
        <div class="row">
          <h4 class="header">Rank</h4>
          <h4 class="header">Chain</h4>
        </div>
        <RestaurantRaw
          v-for="(restaurant, index) in restaurantsOrganized.first"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="index"
        />
      </div>
      <div class="table-col">
        <div class="row">
          <h4 class="header">Rank</h4>
          <h4 class="header">Chain</h4>
        </div>
        <RestaurantRaw
          v-for="(restaurant, index) in restaurantsOrganized.second"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin: 3rem 0;
}
.table h1 {
  margin-bottom: 2rem;
}
.table-container {
  display: flex;
  justify-content: space-between;
}
.table-col {
  width: 48%;
}
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
</style>
