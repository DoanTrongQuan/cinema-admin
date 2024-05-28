import { defineStore } from "pinia";
import { getAllBill,deleteBillByAdmin } from '~/repositories/cinema/billRepo';
import { createToast } from "~/utils/toast";
export const useBillStore = defineStore({
  id: "billStore",
  state: () => ({
    bills:[]
  }),
  getters: {},
  actions: {
    async getAllBill(){
        try {
          const res = await getAllBill()
          this.bills = res.data;

        } catch (error) {  
          console.log(error.response.data);
          throw error;
        }
    },
    async deleteBillByAdmin(data){
      try {
        const res = await deleteBillByAdmin(data)
        createToast({message:'Xóa đơn hàng thành công',time:3000, title: 'Thành công'})

      } catch (error) {  
        createToast({message: error.response.data , type: 'error', title: 'Thất bại'})
        
      }
  },


    clear() {
      this.$reset()
    }
  }
});