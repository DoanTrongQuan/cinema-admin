<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const fileRef = ref<HTMLInputElement>()
const isDeleteAccountModalOpen = ref(false)

const state = reactive({
  name: 'Benjamin Canac',
  email: 'ben@nuxtlabs.com',
  username: 'benjamincanac',
  avatar: '',
  bio: '',
  password_current: '',
  password_new: ''
})

const toast = useToast()

function validate(state: any): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Please enter your name.' })
  if (!state.email) errors.push({ path: 'email', message: 'Please enter your email.' })
  if ((state.password_current && !state.password_new) || (!state.password_current && state.password_new)) errors.push({ path: 'password', message: 'Please enter a valid password.' })
  return errors
}

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement

  if (!input.files?.length) {
    return
  }

  state.avatar = URL.createObjectURL(input.files[0])
}

function onFileClick() {
  fileRef.value?.click()
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)

  toast.add({ title: 'Profile updated', icon: 'i-heroicons-check-circle' })
}
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UForm
      :state="state"
      :validate="validate"
      :validate-on="['submit']"
      @submit="onSubmit"
    >
      <UDashboardSection
        title="Phim"
        description=""
      >
        <template #links>
          <UButton
            type="submit"
            label="Save changes"
            color="black"
          />
        </template>

        <UFormGroup
          name="name"
          label="Tên phim"
          description=""
          required
          class="grid grid-cols-4 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            class ="col-span-3"
            v-model="state.name"
            autocomplete="off"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="email"
          label="Thời lượng"
          description=""
          required
          class="grid grid-cols-4 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            class ="col-span-3"
            v-model="state.email"
            type="email"
            autocomplete="off"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="username"
          label="Đường dẫn"
          description=""
          required
          class="grid grid-cols-4 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            class ="col-span-3"
            v-model="state.username"
            autocomplete="off"
            size="md"

          >
          </UInput>
        </UFormGroup>
        <UFormGroup
          name="password"
          label="Ngày công chiếu, ngày kết thúc"
          class="grid grid-cols-4 gap-2"
        >
          <UInput
            id="password"
            v-model="state.password_current"
            type="password"
            placeholder="Ngày công chiếu"
            size="md"
          />
          <UInput
            id="password_new"
            v-model="state.password_new"
            type="password"
            placeholder="Ngày kết thúc"
            size="md"
            class="mt-2"
          />
        </UFormGroup>
        <UFormGroup
          name="email"
          label="Đạo diễn"
          description=""
          required
          class="grid grid-cols-4 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            class ="col-span-3"
            v-model="state.email"
            type="email"
            autocomplete="off"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="avatar"
          label="Hình ảnh"
          class="grid grid-cols-4 gap-2"
        >
        <v-file-input density ="compact" class="col-span-3" label="File input" variant="outlined"></v-file-input>
        </UFormGroup>
        <UFormGroup
          name="avatar"
          label="Hình ảnh giới thiệu"
          class="grid grid-cols-4 gap-2"
        >
        <v-file-input density ="compact" class="col-span-3" label="File input" variant="outlined"></v-file-input>
        </UFormGroup>
        <UFormGroup
          name="avatar"
          label="Giới thiệu phim"
          class="grid grid-cols-4 gap-2"
        >
        <v-file-input density ="compact" class="col-span-3" label="File input" variant="outlined"></v-file-input>
        </UFormGroup>
        <UFormGroup
          name="email"
          label="Quốc gia"
          description=""
          required
          class="grid grid-cols-4 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            class ="col-span-3"
            v-model="state.email"
            autocomplete="off"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name=""
          label="Mô tả"
          class="grid grid-cols-4 gap-2"
          :ui="{ container: '' }"
        >
          <UTextarea
            class = "col-span-3"
            v-model="state.bio"
            :rows="5"
            autoresize
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="password"
          label="Password"
          description="Confirm your current password before setting a new one."
          class="grid grid-cols-2 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            id="password"
            v-model="state.password_current"
            type="password"
            placeholder="Current password"
            size="md"
          />
          <UInput
            id="password_new"
            v-model="state.password_new"
            type="password"
            placeholder="New password"
            size="md"
            class="mt-2"
          />
        </UFormGroup>
      </UDashboardSection>
    </UForm>

    <UDivider class="mb-4" />

    <UDashboardSection
      title="Account"
      description="No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently."
    >
      <div>
        <UButton
          color="red"
          label="Delete account"
          size="md"
          @click="isDeleteAccountModalOpen = true"
        />
      </div>
    </UDashboardSection>

    <!-- ~/components/settings/DeleteAccountModal.vue -->
    <SettingsDeleteAccountModal v-model="isDeleteAccountModalOpen" />
  </UDashboardPanelContent>
</template>
