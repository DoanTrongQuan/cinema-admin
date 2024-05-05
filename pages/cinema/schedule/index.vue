<template>
<div class="overflow-y-auto">
    <div class="w-full" style="width: 700px !important;">
    <UModal v-model="isShowAddSchedule" class="w-full" prevent-close >
        <div class="py-1 px-4" >
            <div class="py-2 flex justify-end">
                <UButton color="gray" variant="ghost" 
                icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeAddSchedule" />
            </div>
            <div class="py-3 px-3">
                <h1 class="text-2xl font-sans text-center font-semibold">Thêm diễn viên</h1>
                <UForm  :state="actor" class="space-y-6" @submit="onSubmit">
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Hình ảnh</p>
                        <v-file-input required class="col-span-3" density = "compact" v-model="actor.image" label="File input" variant="outlined"></v-file-input>
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Tên diễn viên</p>
                        <UInput required class="col-span-3" v-model="actor.name"  size="sm" />
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Chiều cao</p>
                        <UInput required class="col-span-3" v-model="actor.height"  size="sm" />
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Giới tính</p>
                        <UInputMenu required v-model="actor.gender" :options="showGender" />
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Ngày sinh</p>
                        <UInput required class="col-span-3" v-model="actor.birthDay"  size="sm" />
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Mô tả</p>
                        <UInput required class="col-span-3" v-model="actor.description"ize="sm" />
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Quốc gia</p>
                        <UInput required class="col-span-3" v-model="actor.nationality" size="sm" />
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Đường dẫn</p>
                        <UInput required class="col-span-3" v-model ="actor.slug" size="sm" />
                    </div>
                    <div class="mt-3 text-center">
                        <UButton type ="submit" class="mt-3"  size="sm">Thêm mới</UButton> 
                    </div>     
                </UForm>

            </div>

        </div>

    </UModal>
  </div>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Quản lí lịch chiếu

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table  :items-per-page-options="[
    { value: 5, title: '05' },
    { value: 10, title: '10' },
    { value: 15, title: '15' },
    { value: 20, title: '20' }A
    ]" v-model:search="search" :items="items">
    </v-data-table>
  </v-card>
  <div>
    <UButton @click="addSchedule">Thêm lịch chiếu</UButton>
  </div>
</div>
</template>

<script setup>
import { useScheduleStore } from '~/stores/admin/useScheduleStore';

const scheduleStore = useScheduleStore()

scheduleStore.getAllSchedule()
const isShowAddSchedule = ref(false)

const items = computed(() => {
    return scheduleStore.schedules
})
  const search = ref('');

  const addSchedule = () => {
    isShowAddSchedule.value = true;
  }

  const closeAddSchedule = () => {
    alert('Những thay đổi chưa được lưu')
    isShowAddSchedule.value = false;
  }
//   const items = ref([
//     {
//       name: 'Nebula GTX 3080',
//       image: '1.png',
//       price: 699.99,
//       rating: 5,
//       stock: true,
//     },
//     {
//       name: 'Galaxy RTX 3080',
//       image: '2.png',
//       price: 799.99,
//       rating: 4,
//       stock: false,
//     },
//     {
//       name: 'Orion RX 6800 XT',
//       image: '3.png',
//       price: 649.99,
//       rating: 3,
//       stock: true,
//     },
//     {
//       name: 'Vortex RTX 3090',
//       image: '4.png',
//       price: 1499.99,
//       rating: 4,
//       stock: true,
//     },
//     {
//       name: 'Cosmos GTX 1660 Super',
//       image: '5.png',
//       price: 299.99,
//       rating: 4,
//       stock: false,
//     },
//   ]);
</script>


<style>

</style>