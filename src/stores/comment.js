import { defineStore } from "pinia";
import { usePostStore } from "./post";

export const useCommentStore = defineStore({
  id: "comment",
  state: () => ({
    comments: [],
  }),
  getters: {
    getPostsComments: (state) =>{
        const postStore = usePostStore()
        return state.comments.filter((post) => post.postId === postStore.post.id )
    }
  },
  actions: {
    async fetchComments() {
        this.comments = []
        this.loading = true

        try {
          let api = 'https://jsonplaceholder.typicode.com/comments';
          this.comments = await fetch(api).then(response => response.json())

        } catch (error) {
          this.error = error.message
        } finally {
          this.loading = false
        }
    },
  }
});
