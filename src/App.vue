<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="navbar">
      <div>
        <nav>
          <RouterLink to='/'>Posts</RouterLink>
          <RouterLink to="/authors"> Authors </RouterLink>
        </nav>
    </div>
    </header>

    <RouterView  />
</template>

<style scoped>
.navbar{
    background-color: lightgreen;
    padding: 1.2rem;
}
a {
  text-decoration: none;
  font-size: 1.3rem;
  margin-right: 1rem;
}
a:hover {
  color: white;
  background-color: cadetblue;
  padding: 1rem;
}
</style>
