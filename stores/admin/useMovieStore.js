import { defineStore } from "pinia";
import { getAllMovie,createMovie } from '~/repositories/cinema/movieRepo';
export const useMovieStore = defineStore({
  id: "movieStore",
  state: () => ({
    movies:[]

  }),
  getters: {},
  actions: {
    async getAllMovie(){
        try {
          const res = await getAllMovie()
          this.movies = res;

        } catch (error) {  
          console.log(error);
        }
    },
    async createMovie(data){
      try {
        const res = await createMovie(data)
      } catch (error) { 
        console.log(error) 
        alert(error)
      }
  },

    clear() {
      this.$reset()
    }
  }
});