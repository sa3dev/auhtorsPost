<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCommentStore } from '../stores/comment'
  import Comment from '../components/Comment.vue'

  defineProps(['post', 'author'])

  const { fetchComments } = useCommentStore()
  let { getPostsComments }  = storeToRefs(useCommentStore())

  fetchComments()

</script>

<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author">Written by: <RouterLink :to="`/author/${author.username}`">{{ author.name }}</RouterLink>
        | <span>Comments: {{ getPostsComments.length }}</span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr>
    <h3>Comments:</h3>
    <comment :comments="getPostsComments"></comment>
  </div>
</template>