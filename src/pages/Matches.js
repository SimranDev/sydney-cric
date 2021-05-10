import styled from "styled-components";
import MatchListItem from "../components/MatchListItem";
import { matchesData } from "../data/matchesData";

const Matches = () => {
  const filterMatchesToday = () => {
    const result = matchesData.filter(
      (item) => Date.parse(item.date) === Date.now()
    );
    console.log(Date.now());
    console.log(Date.parse(matchesData[1].date));
    console.log(result);
    // console.log(Date().slice());
    console.log(new Date());
  };

  return (
    <MatchesContainer>
      <TitleDiv>
        <h1>MATCHES</h1>
      </TitleDiv>
      <button onClick={filterMatchesToday}>Today</button>
      {matchesData.map((item) => (
        <MatchListItem
          date={item.date.slice(0, 6).replace(/-/g, " ")}
          time={item.time}
          teamAImg={item.teamA.img}
          teamAName={item.teamA.name}
          teamBImg={item.teamB.img}
          teamBName={item.teamB.name}
          umpireName={item.umpire}
          location={item.location}
          key={item.id}
        />
      ))}
    </MatchesContainer>
  );
};

export default Matches;

const TitleDiv = styled.div`
  display: flex;
  width: 80%;
  /* height: 120px; */
  margin-top: 20px;
  padding: 4px;
  color: var(--secondary-accent-clr);
  /* background-color: var(--list-bg-clr); */

  @media (max-width: 900px) {
    width: 94%;
  }
`;

const MatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px dashed blue; */
  margin-left: 80px;
  margin-top: 50px;
  /* height: 400px; */

  @media (max-width: 800px) {
    margin: auto;
  }
`;
