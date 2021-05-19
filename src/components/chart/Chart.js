import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { getTotalCases, getDateStamp, options } from "./data";
import axios from "axios";

const LineChart = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function getData() {
      const dynamoData = await axios
        .get(process.env.REACT_APP_GET_COUNTRIES_URL)
        .then((response) => setCountriesData(response.data.countries))
        .catch((error) => console.log(error));
      return dynamoData;
    }
    getData();
  }, []);

  const data = {
    labels: getDateStamp(countriesData),
    datasets: [
      {
        label: "USA",
        data: getTotalCases(countriesData, "USA"),
        fill: false,
        borderColor: "red",
        tension: 0.3,
      },
      {
        label: "India",
        data: getTotalCases(countriesData, "India"),
        fill: false,
        borderColor: "orange",
        tension: 0.3,
      },
      {
        label: "Brazil",
        data: getTotalCases(countriesData, "Brazil"),
        fill: false,
        borderColor: "green",
        tension: 0.3,
      },
      {
        label: "France",
        data: getTotalCases(countriesData, "France"),
        fill: false,
        borderColor: "blue",
        tension: 0.3,
      },
      {
        label: "Turkey",
        data: getTotalCases(countriesData, "Turkey"),
        fill: false,
        borderColor: "grey",
        tension: 0.3,
      },
    ],
  };

  return (
    <ParentContainer>
      <Line data={data} options={options} />
    </ParentContainer>
  );
};

export default LineChart;

const ParentContainer = styled.div`
  margin-top: 300px;
  display: flex;
  width: 90%;
`;
