
<script setup>
definePageMeta({
  layout:'default', 
})
const router = useRouter();
router.replace('/dashboard');
const isShowAccount = ref(false)
</script>



<template>
  <div class="w-full" style="width: 700px !important">
    <UModal v-model="isShowAccount" class="w-full" prevent-close>
      <div class="py-1 px-4">
        <div class="py-2 flex justify-end">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isShowAccount = false"
          />
        </div>
        <div class="py-3 px-3">
          <h1 class="text-2xl font-sans text-center font-semibold pb-3">
            Thêm đồ ăn
          </h1>
          <form  class="space-y-6">
            <div class ="grid grid-cols-3">
                <p class = "col-span-1">Hình ảnh</p>
                <v-file-input class="col-span-2" density = "compact" v-model="newFood.image.name" label="File input" variant="outlined"></v-file-input>
            </div>
            <div class ="grid grid-cols-3">
                <p class = "col-span-1">Tên combo</p>
                <UInput required class = "col-span-2" v-model="newFood.nameOfFood"></UInput>
            </div>
            <div class ="grid grid-cols-3">
                <p class = "col-span-1">Mô tả</p>
                <UTextarea
                required
                class = "col-span-2"
                v-model="newFood.description"
                :rows="5"
                autoresize
                size="md"
            />
            </div>
            <div class ="grid grid-cols-3">
                <p class = "col-span-1">Giá</p>
                <UInput required class = "col-span-2" v-model="newFood.price"></UInput>
            </div>
            <div class="w-full flex justify-center">
               <UButton @click.prevent = "createFood">Thêm</UButton> 
            </div>
        </form>
        </div>
      </div>
    </UModal>
  </div>

</template>