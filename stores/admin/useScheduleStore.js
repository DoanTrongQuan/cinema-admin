import { defineStore } from "pinia";
import { getAllSchedule,getAllMovieSchedule,getAllRoomSchedule} from '~/repositories/cinema/scheduleRepo';

export const useScheduleStore = defineStore({
  id: "scheduleStore",
  state: () => ({
    schedules:[],
    rooms:[],
    movies:[],

  }),
  getters: {},
  actions: {
    async getAllSchedule(){
        try {
          const res = await getAllSchedule()
          this.schedules = res.data;

        } catch (error) {  
          alert(error.response.data)
        }
    },
    async getAllMovieSchedule(){
      try {
        const res = await getAllSchedule()
        this.movies = res.data;

      } catch (error) {  
        alert(error.response.data)
      }
  },
  async getAllRoomSchedule(){
    try {
      const res = await getAllSchedule()
      this.rooms = res.data;

    } catch (error) {  
      alert(error.response.data)
    }
},

    clear() {
      this.$reset()
    }

  },
  


});