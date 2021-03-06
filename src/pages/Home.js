import styled from "styled-components";
import LineChart from "../components/chart/Chart";

const Home = () => {
  return (
    <HomeContainer>
      <LineChart />
      <div>Home section under development!</div>
      <h4>Please visit "Matches" section.</h4>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed blue;
  margin-left: 80px;
  margin-top: 50px;
  /* height: 400px; */

  @media (max-width: 800px) {
    margin: auto;
  }
`;
