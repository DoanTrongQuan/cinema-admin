<script setup>
import eventBus from '~/utils/eventBus'
import AddActor from '~/components/actor/AddActor.vue'
import { useMovieStore } from '~/stores/admin/useMovieStore';
import { useActorStore } from '~/stores/admin/useActorStore'

const isDeleteAccountModalOpen = ref(false)
const movieStore = useMovieStore()
const actorStore = useActorStore()


actorStore.getAllActor()
const movie = reactive({
  movieDuration: '',
  endTime: '',
  premiereDate: '',
  description: '',
  director: '',
  image: '',
  herolmage: '',
  language:'' ,
  name:'',
  trailer:'',
  slug:'',
  type:[],
  actor:[],
  codeCinema:'',
  isUpcoming:''

})

const showTime = ['Phim sắp chiếu','Phim đang chiếu']

const showTimeSelected = ref(showTime[0])

const toast = useToast()

const people = computed(() => {
  return actorStore.actorName
})


const movieType = ref([
  { name: 'Lãng mạn'},
  { name: 'Kinh dị'},
  { name: 'Tình cảm' },
  { name: 'Tình dục'},
  { name: 'Hài hước' },
  { name: 'Dật gân'},
  { name: 'Hành động'}
])

const cinema = ['Cine Mỹ đình', 'Cine đan phượng','Cine giải phóng','Cine thanh xuân','Cine nghĩa lộ','Cine việt trì']
const openAddActor = () => {
  eventBus.emit('show_add_actor',true)
}
const onSubmit = async (event) => {
    // console.log(event.data)
    const data = {
      movieDuration: event.data.movieDuration,
      endTime: event.data.endTime,
      premiereDate: event.data.premiereDate,
      description: event.data.description,
      director: event.data.director,
      image: event.data.image.name,
      herolmage: event.data.herolmage.name,
      language:event.data.language ,
      name:event.data.name,
      trailer:event.data.trailer.name,
      slug:event.data.slug,
      type:event.data.type,
      actor:event.data.actor,
      codeCinema:event.data.codeCinema,
      isUpcoming:event.data.isUpcoming
    }

    try {
      await movieStore.createMovie(data)
      toast.add({ title: 'Thêm phim thành công' })
    } catch (error) {
    }

}

const check = () => {
  console.log(typeof movie.actor)
}
</script>

<template>
  <div>
    <AddActor/>
  </div>
  <UDashboardPanelContent class="pb-24">
    <h1 class="text-center font-medium font-sans text-3xl">Thêm mới phim</h1>
    <UForm
      :state="movie"
      @submit="onSubmit"
    >
      <UDashboardSection>
        
        <div class="grid grid-cols-4 gap-2">
          <p class="col-span-1">Tên phim</p>
          <UInput
            class ="col-span-2 w-full"
            v-model="movie.name"
            autocomplete="off"
            size="md"
          />
        </div>

        <div
          class="grid grid-cols-4 gap-2"
        >
          <p class = "col-span-1">Thời lượng</p>
          <UInput
            class ="col-span-2"
            v-model="movie.movieDuration"
            autocomplete="off"
            size="md"
          />
      </div>

        <div class="grid grid-cols-4 gap-2">
          <p class="col-span-1">Đường dẫn</p>
          <UInput
            class ="col-span-2"
            v-model="movie.slug"
            autocomplete="off"
            size="md"

          >
          </UInput>
        </div>
        <div
          class="grid grid-cols-4 gap-2"
          >
          <p class="col-span-1">Ngày công chiếu"</p>
          <div class="col-span-2">
            <UInput
            id="password"
            type="datetime-local"
            v-model="movie.premiereDate"
            placeholder="Ngày công chiếu"
            size="md"
            />
            </div>
          </div>
            <div class="grid grid-cols-4 gap-2">
              <p class = "col-span-1"> ngày kết thúc</p>
                <UInput
                id="password_new"
                v-model="movie.endTime"
                type="datetime-local"
                placeholder="Ngày kết thúc"
                size="md"
                class="mt-2 col-span-2"
                />
            </div>


        <div
          class="grid grid-cols-4 gap-2"
        >
          <p class="col-span-1">Đạo diễn</p>
          <UInput
            class ="col-span-2"
            v-model="movie.director"
            autocomplete="off"
            size="md"
          />
        </div>
        <div class="grid grid-cols-4 gap-5">
        <p class = "col-span-1">Diễn viên</p>
        <div class="col-span-2">
                <v-autocomplete
                  density = "compact"
                  :items="people"
                  v-model ="movie.actor"
                  label ="Diễn viên"
                  chips
                  variant="outlined"
                  clearable
                  closable-chips
                  multiple
                >
                  <template v-slot:chip="{ props, item }">
                    <v-chip
                      v-bind="props"
                      :text="item.raw.name"
                    ></v-chip>
                  </template>

                  <template v-slot:item="{ props, item }">
                    <v-list-item
                      v-bind="props"
                      :title="item.raw.name"
                    ></v-list-item>
                  </template>
                </v-autocomplete>
        </div>
        <div class="col-span-1">
          <UButton
          @click = "openAddActor"
          class ="col-span-2"
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          variant="solid"
          label="Thêm diễn viên"
          :trailing="false"
          />
        </div>  

        </div>

        <div class = "grid grid-cols-4 gap-2">
          <p class="col-span-1">Thể loại</p>
          <div class="col-span-2">
            <v-autocomplete
                  density = "compact"
                  :items="movieType"
                  v-model="movie.type"
                  label ="Thể loại"
                  chips
                  variant="outlined"
                  clearable
                  closable-chips
                  multiple
                >
                  <template v-slot:chip="{ props, item }">
                    <v-chip
                      v-bind="props"
                      :text="item.raw.name"
                    ></v-chip>
                  </template>

                  <template v-slot:item="{ props, item }">
                    <v-list-item
                      v-bind="props"
                      :title="item.raw.name"
                    ></v-list-item>
                  </template>
                </v-autocomplete>
          </div>
        </div>

        <div
          class="grid grid-cols-4 gap-2"
        >
          <p class="col-span-1">Hình ảnh</p>
          <v-file-input class="col-span-2" density = "compact" v-model="movie.image" label="File input" variant="outlined"></v-file-input>
        </div>
        <div
          class="grid grid-cols-4 gap-2"
        >
          <p class="col-span-1">Hình ảnh giới thiệu</p>
          <v-file-input density ="compact" v-model="movie.herolmage" class="col-span-2" label="File input" variant="outlined"></v-file-input>
        </div>
        <div
          class="grid grid-cols-4 gap-2"
        >
        <p class="col-span-1">Giới thiệu phim</p>
        <v-file-input density ="compact" v-model="movie.trailer" class="col-span-2" label="File input" variant="outlined"></v-file-input>
        </div>
        <div
          class="grid grid-cols-4 gap-2"
        >
        <p class="col-span-1">Quốc gia</p>
          <UInput
            class ="col-span-2"
            v-model="movie.language"
            autocomplete="off"
            size="md"
          />
      </div>

        <div
          class="grid grid-cols-4 gap-2"
        >
          <p class="col-span-1">Mô tả</p>
          <UTextarea
            class = "col-span-2"
            v-model="movie.description"
            :rows="5"
            autoresize
            size="md"
          />
        </div>

        <div
          class="grid grid-cols-4 gap-2"
        >
        <p class="col-span-1">Thời gian chiếu</p>
         <UInputMenu class="col-span-2" v-model="movie.isUpcoming" :options="showTime" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          <p class="col-span-1">Cụm rạp</p>
          <USelectMenu v-model="movie.codeCinema" :options="cinema" />
        </div>
      </UDashboardSection>
      <UButton
          type = "submit"
          color="green"
          label="Thêm mới"
          size="md"
          @click="createMovie"
      />
      <!-- <UButton
          type = "submit"
          color="green"
          label="check"
          size="md"
          @click="check"
      /> -->
    </UForm>
    <!-- ~/components/settings/DeleteAccountModal.vue -->
  <SettingsDeleteAccountModal v-model="isDeleteAccountModalOpen" />
</UDashboardPanelContent>
</template>
