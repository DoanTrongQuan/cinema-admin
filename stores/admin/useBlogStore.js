import { defineStore } from "pinia";
import { createBlog } from '~/repositories/cinema/blogRepo';

export const useBlogStore = defineStore({
  id: "blogStore",
  state: () => ({
    blogs:[]
  }),
  getters: {},
  actions: {
    async createBlog(data){
        try {
          const res = await createBlog(data)
          alert(res.data)
        } catch (error) {  
          console.log(error.response.data);
          throw error;
        }
    },


    clear() {
      this.$reset()
    }
  }
});