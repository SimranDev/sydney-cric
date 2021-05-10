import styled from "styled-components";

const CricEvents = () => {
  return (
    <CricEventsContainer>
      <div>CricEvents section under development!</div>
    </CricEventsContainer>
  );
};

export default CricEvents;

const CricEventsContainer = styled.div`
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
