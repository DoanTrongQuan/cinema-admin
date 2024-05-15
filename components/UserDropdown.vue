<script setup>
import { useAuth } from '~/composables/authentication/useAuth';
import { useProfile } from '~/composables/useProfile';


const { logout } = useAuth()
const { userName } = useProfile();
const items = computed(() => [
[{
  label:'Thông tin cá nhân',

}],
[{
    label: 'Đăng xuất',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => logout()
  }]
])
</script>

<template>
  <UDropdown
    mode="hover"
    :items="items"
    :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
    :popper="{ strategy: 'absolute', placement: 'top' }"
    class="w-full"
  >
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="ghost"
        class="w-full"
        :label="userName"
        :class="[open && 'bg-gray-50 dark:bg-gray-800']"
      >
        <template #leading>
          <UAvatar
            src=""
            size="2xs"
          />
        </template>

        <template #trailing>
          <UIcon
            name="i-heroicons-ellipsis-vertical"
            class="w-5 h-5 ml-auto"
          />
        </template>
      </UButton>
    </template>

    <template #account>
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          ben@nuxtlabs.com
        </p>
      </div>
    </template>
  </UDropdown>
</template>
