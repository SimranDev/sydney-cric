import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { indiaCount, getCountries, dynamoData } from "../../api/covid";
import { options } from "./data";
import axios from "axios";

const LineChart = () => {
  const [dataState, setDataState] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    async function getData() {
      const dynamoData = await axios
        .get(
          "https://2zbwayfgle.execute-api.ap-southeast-2.amazonaws.com/prod/countries"
        )
        .then((response) => setDataState(response.data.countries))
        .catch((error) => console.log(error));
      return dynamoData;
    }
    getData();
  }, []);

  const getDateStamp = () => {
    const dates = dataState
      .filter((item) => item.countryName === "USA")
      .map((val) => new Date(val.dateStamp * 1000));
    const dateSubString = dates.map((val) => val.toString().substring(4, 15));
    return dateSubString;
  };

  const data = {
    labels: getDateStamp(),
    datasets: [
      {
        label: "USA",
        data: dataState
          .filter((item) => item.countryName === "USA")
          .map((val) => val.total),
        fill: false,
        borderColor: "red",
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "India",
        data: dataState
          .filter((item) => item.countryName === "India")
          .map((val) => val.total),
        fill: false,
        borderColor: "orange",
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "Brazil",
        data: dataState
          .filter((item) => item.countryName === "Brazil")
          .map((val) => val.total),
        fill: false,
        borderColor: "green",
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "France",
        data: dataState
          .filter((item) => item.countryName === "France")
          .map((val) => val.total),
        fill: false,
        borderColor: "blue",
        tension: 0.3,
        yAxisID: "y",
      },
      {
        label: "Turkey",
        data: dataState
          .filter((item) => item.countryName === "Turkey")
          .map((val) => val.total),
        fill: false,
        borderColor: "grey",
        tension: 0.3,
        yAxisID: "y",
      },
    ],
  };

  return (
    <ParentContainer>
      <Line data={data} options={options} />
      <button onClick={() => setLabels(getDateStamp)}>get dateStamp</button>
    </ParentContainer>
  );
};

export default LineChart;

const ParentContainer = styled.div`
  margin-top: 300px;
  display: flex;
  width: 90%;
  /* border: 1px dashed purple; */
`;
