import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error:null
  }),
  getters: {
    getPostsPerauthor: (state) =>{
      return (authorId) =>{
        return state.posts.filter((post) => post.id === authorId)
      }
    }
  },
  actions: {
    async fetchPosts() {
        this.posts = []
        this.loading = true

        try {
          let api = 'https://jsonplaceholder.typicode.com/posts';

          this.posts = await fetch(api).then(response => response.json())

        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true

      try {
        let api = `https://jsonplaceholder.typicode.com/posts/${id}`;

        this.post = await fetch(api).then(response => response.json())

      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }

    }
  },
});
