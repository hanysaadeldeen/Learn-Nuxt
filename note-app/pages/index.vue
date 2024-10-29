<template lang="pug">
  head
    title Auth Page
    //- meta(name="description" content="This is a description of my page.")
  .container
    AuthCard 
  
</template>
<script setup lang="ts"></script>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
}
</style>
