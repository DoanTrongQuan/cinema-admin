import { defineStore } from "pinia";
import { createFood, getAllFood,getFoodByAdmin,updateFood } from '~/repositories/cinema/foodRepo'
import { createToast } from "~/utils/toast";
export const useFoodStore = defineStore({
    id: "foodStore",
    state: () => ({
        foods:[],
        foodDetail:{},
        isLoading:false,
    }),
    getters: {},
    actions: {
      async createFood(data){
          try {
            const res = await createFood(data)
            this.foods.push(res.data)
            createToast({message:'Thêm combo thành công',time:3000, title: 'Thành công'})
          } catch (error) {  
            createToast({message: error.response.data , type: 'error', title: 'Thất bại'})
          }
      },

      async getAllFood(){
        try {

          const res = await getAllFood()
          this.foods = res.data;

        } catch (error) {  

        }

    },
    async getFoodByAdmin(data){
        try {
         this.isLoading = true;
          const res = await getFoodByAdmin(data);
          this.foodDetail = res.data;

        } catch (error) {  
          alert(error.response.data)
        }finally{
            this.isLoading = false
        }
    },
    async updateFood(data){
      try {
       this.isLoading = true;
        const res = await updateFood(data);
        createToast({message:'Cập nhật tình trạng thành công',time:3000, title: 'Thành công'})
        for(let f of this.foods){
          if(f.id === res.data.id){
            f.price = res.data.price
            f.description = res.data.description
            f.image = res.data.image
            foo.foodName = res.data.foodName
            break;
          }
        }
       
      } catch (error) {  
        createToast({message: error.response.data , type: 'error', title: 'Thất bại'})
      }finally{

      }
  },

      clear() {
        this.$reset()
      }
    }
  });