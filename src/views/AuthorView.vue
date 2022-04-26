<script setup>
 import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '../stores/author'
import { usePostStore } from '../stores/post';
import Author from '../components/Author.vue'

const { authors } = storeToRefs(useAuthorStore()) 
const { getPostsPerauthor  } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()


const route = useRoute()

const getAuthorByUserName  = computed(()=> {
  return authors.value.find((author )=> author.username === route.params.username)
})

fetchPosts()

</script>

<template>
  <div>
  <author 
    :author="getAuthorByUserName"
    :posts="getPostsPerauthor(getAuthorByUserName.id)"
  ></author>
  </div>
</template>