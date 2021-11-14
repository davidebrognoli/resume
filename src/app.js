import "./main.scss";
import Chart from "chart.js/auto";

const dataSource = require("../build/data.json");

const { my_day } = dataSource;
const data = my_day.map((m) => m.length);
const backgroundColor = my_day.map((m) => m.color);
const labels = my_day.map((m) => m.label);

const ctx = document.getElementById("myChart");
const config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
    labels,
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

new Chart(ctx, config);
