<template>
<div class="overflow-y-auto">
  <div class="w-full" style="width: 700px !important;">
    <UModal v-model="isShowSchedule" class="w-full" prevent-close >
        <div class="py-1 px-4" >
            <div class="py-2 flex justify-end">
                <UButton color="gray" variant="ghost" 
                icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closeSchedule" />
            </div>
            <div class="py-3 px-3">
                <h1 class="text-2xl font-sans text-center font-semibold">Thêm lịch chiếu</h1>
                <UForm  :state="actor" class="space-y-6" @submit="onSubmit">
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Phim</p>
                        <USelectMenu
                        class="col-span-3"
                        v-model="movieSelected"
                        :options="movies"
                        placeholder="Tìm phim"
                        searchable
                        searchable-placeholder="Tìm phim theo tên"
                        option-attribute="name"
                        by="id"
                        :search-attributes="['name']"
                      >
                      </USelectMenu>
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-5">
                        <p class="col-span-1">Phòng chiếu</p>
                        <USelectMenu
                        class="col-span-3"
                        v-model="roomsSelected"
                        :options="rooms"
                        placeholder="Tìm phòng chiếu"
                        searchable
                        searchable-placeholder="Tìm phòng theo tên"
                        option-attribute="roomName"
                        by="id"
                        :search-attributes="['roomName']"
                      >
                      </USelectMenu>
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
    { value: 20, title: '20' }
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
import EditSchedule from '~/components/schedule/EditSchedule.vue'
const scheduleStore = useScheduleStore()


scheduleStore.getAllSchedule()
scheduleStore.getAllMovieSchedule()
scheduleStore.getAllRoomSchedule()

const isShowSchedule = ref(false)

const { movies, rooms } = scheduleStore



const items = computed(() => {
    return scheduleStore.schedules
})
const search = ref('');

  const addSchedule = () => {
    isShowSchedule.value = true;
  }
// const check = () => {
//   console.log(movieSelected.value.id)
// }
  const closeSchedule = () => {
    alert('Những thay đổi chưa được lưu')
    isShowSchedule.value = false;
  }
//   const movies  = [
//     {
//         id: 1,
//         name: "Cuộc đời của anh ấy"
//     },
//     {
//         id: 2,
//         name: "Cuộc đời của anh ấy"
//     },
//     {
//         id: 3,
//         name: "Cuộc đời của anh ấy"
//     },
//     {
//         id: 4,
//         name: "Cuộc đời của anh ấy"
//     },
//     {
//         id: 5,
//         name: "Ma ám"
//     },
//     {
//         id: 6,
//         name: "Kinh hoàng"
//     },
//     {
//         id: 7,
//         name: "Nỗi sợ kinh hoàng"
//   }
// ]

const movieSelected = ref(movies[0]?.name || '')

// const rooms = [
//     {
//         id: 1,
//         roomName: "P103"
//     }
// ]
const roomsSelected = ref(rooms[0]?.roomName|| '')
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