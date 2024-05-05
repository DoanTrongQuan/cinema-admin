import { defineStore } from "pinia";
import { createActor } from '~/repositories/cinema/actorRepo';

export const useActorStore = defineStore({
  id: "actorStore",
  state: () => ({

  }),
  getters: {},
  actions: {
    async createActor(data){
        try {
          const res = await createActor(data)
         
        } catch (error) {  
          alert(error);
        }
    },

    clear() {
      this.$reset()
    }
  }
});