<template>
  <line-chart :chart-data="chartData" />
</template>

<script setup lang="ts">
import { Chart, registerables, type ChartData } from "chart.js";
import { computed } from "vue";
import { LineChart } from "vue-chart-3";

Chart.register(...registerables);

const props = defineProps<{
  contributionsByYear: number[];
  futureValueByYear: number[];
  currency: string;
}>();

const labels = computed(() =>
  [...Array(props.futureValueByYear.length).keys()].map(
    (year) => `Year ${year}`,
  ),
);

const chartData = computed<ChartData<"line">>(() => ({
  labels: labels.value,
  datasets: [
    {
      data: props.futureValueByYear,
      backgroundColor: "#09814A",
      borderColor: "#0FD27A",
      label: "Future value",
    },
    {
      data: props.contributionsByYear,
      backgroundColor: "#CF3A3A",
      borderColor: "#DD7373",
      label: "Contributions",
    },
  ],
}));
</script>
