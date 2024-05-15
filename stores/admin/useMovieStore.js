import { defineStore } from "pinia";
import { getAllMovie,createMovie,getMovieType,getAllCinemaName,getMovie,updateMovie } from '~/repositories/cinema/movieRepo';
export const useMovieStore = defineStore({


  id: "movieStore",
  state: () => ({
    movies:[],
    movie:{},
    movieType:[],
    cinemaName:[]
  }),
  getters: {},
  actions: {
    async getAllMovie(){
        try {
          const res = await getAllMovie()
          this.movies = res.data;

        } catch (error) {  
          console.log(error.response.data);
          throw error;
        }
    },
    async createMovie(data){
      try {
        const res = await createMovie(data)
      } catch (error) { 
        console.log(error) 
        alert(error.response.data)
        throw error;
      }
    },
    async updateMovie(data){
      try {
        const res = await updateMovie(data)
        this.movie = res.data;
        
      } catch (error) { 
        console.log(error) 
        alert(error.response.data)
      }
    },
  async getMovie(data){
    try {
      const res = await getMovie(data)
      this.movie = res.data;
    } catch (error) { 
      console.log(error) 
      alert(error.response.data)
    }
},
  async getMovieType(){
    try {
      const res = await getMovieType()
      this.movieType = res.data;
    } catch (error) { 
      console.log(error) 
      alert(error.response.data)
    }
},
async getAllCinemaName(){
  try {
    const res = await getAllCinemaName()
    this.cinemaName = res.data;
  } catch (error) { 
    alert(error.response.data)
  }
},

    clear() {
      this.$reset()
    }
  }
});