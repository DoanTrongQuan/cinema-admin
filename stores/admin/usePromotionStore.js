import { defineStore } from "pinia";
import { getAllPromotion,createPromotion } from '~/repositories/cinema/promotionRepo';

export const usePromotionStore = defineStore({
  id: "promotionStore",
  state: () => ({
    promotions:[],

  }),
  getters: {},
  actions: {
    async getAllPromotion(){
        try {
          const res = await getAllPromotion()
          this.promotions = res.data;

        } catch (error) {  
          throw error;
        }
    },

    async createPromotion(data){
      try {
        const res = await createPromotion(data);
        alert(res.data)
      } catch (error) {  
        alert(error.response.data)
        throw error;
      }
  },


    clear() {
      this.$reset()
    }
  }
});