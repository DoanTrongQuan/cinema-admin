<script setup >
// import AddActor from '~/components/actor/AddActor.vue'
const links = [[{
  label: 'General',
  icon: 'i-heroicons-user-circle',
  to: '/settings',
  exact: true
}, {
  label: 'Members',
  icon: 'i-heroicons-user-group',
  to: '/settings/members'
}, {
  label: 'Notifications',
  icon: 'i-heroicons-bell',
  to: '/settings/notifications'
}], [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: 'https://ui.nuxt.com/pro',
  target: '_blank'
}, {
  label: 'Buy now',
  icon: 'i-heroicons-credit-card',
  to: 'https://ui.nuxt.com/pro/purchase',
  target: '_blank'
}]]

</script>

<template>

  <UDashboardPage>

    <UDashboardPanel grow>
      <UDashboardNavbar title="Quản lí rạp chiếu phim"  class="text-2xl"/>


      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
