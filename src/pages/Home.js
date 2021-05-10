import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <div>Home section under development!</div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed blue;
  margin-left: 80px;
  margin-top: 50px;
  height: 400px;

  @media (max-width: 800px) {
    margin: auto;
  }
`;
