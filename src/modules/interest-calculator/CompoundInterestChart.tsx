import { defineComponent, computed } from "vue";
import { Chart, registerables, type ChartData } from "chart.js";
import { LineChart } from "vue-chart-3";

type Props = {
  contributionsByYear: number[];
  futureValueByYear: number[];
};

export default defineComponent<Props>(
  (props) => {
    Chart.register(...registerables);

    const labels = computed(() => {
      return [...Array(props.futureValueByYear.length).keys()].map(
        (year) => `Year ${year}`,
      );
    });

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

    return () => {
      return (
        <>
          <LineChart chartData={chartData.value} />
        </>
      );
    };
  },
  { props: ["contributionsByYear", "futureValueByYear"] },
);
