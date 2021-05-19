import moment from "moment";

export const getDateStamp = (state) => {
  const dates = state
    .filter((item) => item.countryName === "USA")
    .map((val) => new Date(val.dateStamp * 1000));
  const dateSubString = dates.map((val) => moment(val).format("DDMMMYYYY"));
  return dateSubString;
};

export const getTotalCases = (state, country) => {
  const totalCases = state
    .filter((item) => item.countryName === country)
    .map((val) => val.total);
  return totalCases;
};

export const getActiveCases = (state, country) => {
  const activeCases = state
    .filter((item) => item.countryName === country)
    .map((val) => val.active);
  return activeCases;
};

//options
let delayed;
export const options = {
  responsive: true,
  maintainAspectRatio: false,

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

  interaction: {
    mode: "index",
    intersect: false,
  },

  plugins: {
    title: {
      display: true,
      text: "TOP 5 TEAMS PROGRESS GRAPH",
      color: "#37474f",
    },
    legend: {
      labels: {
        boxWidth: 12,
        padding: 12,
        color: "#37474f",
      },
    },
  },

  elements: {
    point: {
      radius: 0,
    },
    line: { tension: 0.3, borderWidth: 2 },
  },

  scales: {
    y: {
      ticks: {
        color: "#37474f",

        font: {
          size: 9,
        },
      },
    },
    x: {
      ticks: {
        color: "#37474f",

        font: {
          size: 9,
        },
      },
    },
  },
};
