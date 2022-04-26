<script setup>
import { RouterLink } from 'vue-router'

defineProps(['author' , 'posts'])
</script>


<template>
    <div>
        <h2>{{author.name }}</h2>
        <h3>{{ posts.length }} posts written.</h3>
        <p v-for="post in posts" :key="post.id">
            <RouterLink :to="`/post/${post.id}`">{{post.title }}</RouterLink>
        </p>
    </div>
</template>