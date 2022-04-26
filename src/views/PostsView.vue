<script setup>
import { RouterLink } from 'vue-router';
import { usePostStore } from './../stores/post'
import { storeToRefs } from 'pinia'

// destructure et rend les valeurs reactive avec storeTorefs on passe directement tout le store sa reste un objet 
  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

// utilisation de methode du store dans le setup
// le fait d'appelé la methode ici on récupere les posts avant que le composant soit monté 
fetchPosts()

</script>

<template>
  <main>

    <p v-if="loading">Loading posts ...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="posts" v-for="post in posts" :key="post.id" >
      
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>

     <p>{{ post.body }}</p>
    </p>
  </main>
</template>

<style scoped>
  main {
    max-width: 80%;
    margin: 0 auto;
  }
</style>
