// import { dynamoData } from "../../api/covid";

// const indiaData = dynamoData.filter(
//   (country) => country.countryName === "India"
// );

// const totalInd = indiaData.map((val) => val.total);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// const data1 = totalInd;

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Blue Rising Star",
      data: [],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.3,
      yAxisID: "y",
    },
    // {
    //   label: "Coogee Bay Rebels",
    //   data: [25, 49, 88, 91, 66, 52, 66, 25, 32, 90, 61, 90],
    //   fill: false,
    //   borderColor: "purple",
    //   tension: 0.3,
    // },
    // {
    //   label: "Unpredictables",
    //   data: [15, 49, 61, 33, 42, 88, 91, 32, 51, 55, 72, 81],
    //   fill: false,
    //   borderColor: "orange",
    //   tension: 0.3,
    // },
    // {
    //   label: "Spartan 11",
    //   data: [12, 82, 76, 8, 61, 66, 44, 32, 88, 33, 61, 70],
    //   fill: false,
    //   borderColor: "blue",
    //   tension: 0.3,
    // },
    // {
    //   label: "Blacktown City Cricket",
    //   data: [35, 62, 98, 55, 33, 73, 81, 61, 66, 21, 12, 26],
    //   fill: false,
    //   borderColor: "grey",
    //   tension: 0.3,
    // },
  ],
};

//animation
// const totalDuration = 10000;
// const delayBetweenPoints = totalDuration / data1.length;
// const previousY = (ctx) =>
//   ctx.index === 0
//     ? ctx.chart.scales.y.getPixelForValue(100)
//     : ctx.chart
//         .getDatasetMeta(ctx.datasetIndex)
//         .data[ctx.index - 1].getProps(["y"], true).y;
// const animation = {
//   x: {
//     type: "number",
//     easing: "linear",
//     duration: delayBetweenPoints,
//     from: NaN, // the point is initially skipped
//     delay(ctx) {
//       if (ctx.type !== "data" || ctx.xStarted) {
//         return 0;
//       }
//       ctx.xStarted = true;
//       return ctx.index * delayBetweenPoints;
//     },
//   },
//   y: {
//     type: "number",
//     easing: "linear",
//     duration: delayBetweenPoints,
//     from: previousY,
//     delay(ctx) {
//       if (ctx.type !== "data" || ctx.yStarted) {
//         return 0;
//       }
//       ctx.yStarted = true;
//       return ctx.index * delayBetweenPoints;
//     },
//   },
// };

//options
let delayed;
export const options = {
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default" && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },

  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "TOP 5 TEAMS PROGRESS GRAPH",
    },
  },
};
