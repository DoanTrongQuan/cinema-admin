<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { useDashboardStore } from '~/stores/admin/useDashboardStore';

definePageMeta({
  middleware: 'auth',
})

const dashboardStore = useDashboardStore()
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
//lấy dữ liệu doanh thu cho cinema
dashboardStore.getRevenueCinema()

const chartData = computed(() => {
  return dashboardStore.chartData
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

</script>

<template>
  <div class = "max-w-[1000px] h-[500px] text-2xl font-bold">
    <div class = "my-4 text-center">
      <h1>Biểu đồ doanh thu 6 tháng đầu năm 2024</h1>
    </div>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
