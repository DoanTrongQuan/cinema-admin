import { defineStore } from "pinia";
import { getAllSchedule} from '~/repositories/cinema/scheduleRepo';

export const useScheduleStore = defineStore({
  id: "scheduleStore",
  state: () => ({
    schedules:[]

  }),
  getters: {},
  actions: {
    async getAllSchedule(){
        try {
          const res = await getAllSchedule()
          this.schedules = res;

        } catch (error) {  
          console.log(error);
        }
    },
  },

    clear() {
      this.$reset()
    }

});