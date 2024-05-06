<script setup lang="ts">
import { useMovieStore } from '~/stores/admin/useMovieStore';
import eventBus from '~/utils/eventBus'

const model = defineModel({
  type: Boolean
})

const toast = useToast()

const loading = ref(false)

const data = ref({})
eventBus.on('update_movie',(value) => {
    data.value = value
})

async function callApi() {
  loading.value = true

  await useMovieStore().updateMovie(data.value)

    loading.value = false
    model.value = false

}

function cancelCallApi() {
  model.value = false
}
</script>

<template>
  <UDashboardModal
    v-model="model"
    title="Xác nhận lưu thay đổi"
    description="Bạn có chắc chắn muốn thay đổi nội dung này!"
    icon="i-heroicons-exclamation-circle"
    prevent-close
    :close-button="null"
    :ui="{  
      icon: {
        base: 'text-green-500 dark:text-green-400'
      } as any,
      footer: {
        base: 'ml-16'
      } as any
    }"
  >
    <template #footer>
      <UButton
        color="green"
        label="Xác nhận"
        :loading="loading"
        @click="callApi"
      />
      <UButton
        color="white"
        label="Hủy bỏ"
        @click="cancelCallApi"
      />
    </template>
  </UDashboardModal>
</template>
