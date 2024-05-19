import { defineStore } from "pinia";
import { createActor,getAllActor } from '~/repositories/cinema/actorRepo';


export const useActorStore = defineStore({
  id: "actorStore",
  state: () => ({
    actorName:[]
  }),
  getters: {},
  actions: {
    async createActor(data){
        try {
          const res = await createActor(data)
        } catch (error) {  
          alert(error.response.data);
          throw error
        }
    },

    async getAllActor(){
      try {
        const res = await getAllActor()
        this.actorName = res.data;
      } catch (error) {  
        alert(error);
      }
  },

    clear() {
      this.$reset()
    }
  }
});