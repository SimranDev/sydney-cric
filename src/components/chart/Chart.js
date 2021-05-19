import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { getActiveCases, getTotalCases, getDateStamp, options } from "./data";
import axios from "axios";

const LineChart = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [toggle, setToggle] = useState(true);

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
        data: toggle
          ? getTotalCases(countriesData, "USA")
          : getActiveCases(countriesData, "USA"),
        borderColor: "red",
      },
      {
        label: "India",
        data: getTotalCases(countriesData, "India"),
        borderColor: "orange",
      },
      {
        label: "Brazil",
        data: getTotalCases(countriesData, "Brazil"),
        borderColor: "green",
      },
      {
        label: "France",
        data: getTotalCases(countriesData, "France"),
        borderColor: "blue",
      },
      {
        label: "Turkey",
        data: getTotalCases(countriesData, "Turkey"),
        borderColor: "#AA00FF",
      },
    ],
  };

  return (
    <ParentContainer>
      <Line data={data} options={options} />
      <ToggleBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Scoring Average" : "Total Scores"}
      </ToggleBtn>
    </ParentContainer>
  );
};

export default LineChart;

const ParentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  position: relative;
  width: 90%;
  height: 70vh;
  /* border: 1px dashed green; */

  @media (max-width: 550px) {
    width: 98%;
  }
`;

const ToggleBtn = styled.button`
  position: absolute;
  border-radius: 2px;
  width: 130px;
  background-color: var(--secondary-accent-clr);
  color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  border-width: 0;
  top: 80px;
  left: 70px;

  :hover {
    transition-duration: 0.7s;
    transform: translateY(-1.6px);
  }
  :active {
    color: black;
    transform: translateY(0px);
  }
`;
