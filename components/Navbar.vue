<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" :to="{ name: 'index' }">
        <img src="~/assets/images.png" alt="" width="50px" height="50px" />
      </NuxtLink>
      <ul class="navbar-nav w-50 ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link active" :to="{ name: 'index' }"
            >Home</NuxtLink
          >
        </li>
        <li class="nav-item 1875rem">
          <NuxtLink class="nav-link active" :to="{ name: 'restaurants' }">
            resturant
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
