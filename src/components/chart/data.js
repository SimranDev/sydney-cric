export const getDateStamp = (state) => {
  const dates = state
    .filter((item) => item.countryName === "USA")
    .map((val) => new Date(val.dateStamp * 1000));
  const dateSubString = dates.map((val) => val.toString().substring(4, 15));
  return dateSubString;
};

export const getTotalCases = (state, country) => {
  const totalCases = state
    .filter((item) => item.countryName === country)
    .map((val) => val.total);

  return totalCases;
};

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
