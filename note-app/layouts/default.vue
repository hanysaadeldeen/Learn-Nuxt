<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <h2>note-app</h2>
      </div>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link :to="{ name: 'notes' }">Notes</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </div>
  <slot />
</template>

<style scoped>
.container {
  height: 100px;
  width: 100%;
  background-color: gray;
  color: white;
  padding: 20px 25px;
}

.content {
  width: 100%;
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
