<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        title="Quản lí hóa đơn"
        :badge="bills.length"
      >
      </UDashboardNavbar>
    <div class="overflow-y-auto">
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2">
        <v-spacer></v-spacer>

        <v-text-field
          density="compact"
          label="Tìm kiếm hóa đơn"
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
        <div class = "mx-5">
        <!-- <UButton @click="">Thêm đồ ăn</UButton> -->
      </div>
      </v-card-title>

      <v-divider></v-divider>
      <v-data-table
        :items-per-page-options="[
          { value: 5, title: '05' },
          { value: 10, title: '10' },
          { value: 15, title: '15' },
          { value: 20, title: '20' },
        ]"
        v-model:search="search"
        :items="bills"
        hover
        :headers="headersBill"
      >
        <template v-slot:item.status="{ item }">
          <div class="text-end">
            <v-chip
              :color="item.status === 2 ? 'green' : 'red'"
              :text="item.status === 2 ? 'Đã thanh toán' :'Chưa thanh toán' "
              class="text-uppercase"
              size="small"
              label
            ></v-chip>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</UDashboardPanel>
</UDashboardPage>
</template>

<script setup>
import { useBillStore } from "~/stores/admin/useBillStore";


const billStore = useBillStore()

const bills = computed(() => {
    return billStore.bills;
})
const search = ref('')

billStore.getAllBill()

const headersBill = ref([
  { title: "Mã hóa đơn", key: "tradingCode", align: "center" },
  {
    title: "Tên hóa đơn",
    align: "center",
    key: "name",
    sortable: false,
    class: "bold-title",
  },
  { title: "Người dùng", key: "user", align: "center" },
  { title: "Tổng tiền (VNĐ)", key: "totalMoney", align: "center" },
  { title: "Ngày tạo", key: "createTime", align: "center" },
  { title: "Trạng thái", key: "status", align: "center" },
]);
</script> 

<style>

</style>