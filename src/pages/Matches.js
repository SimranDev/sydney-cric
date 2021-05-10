import { useState } from "react";
import styled from "styled-components";
import MatchListItem from "../components/MatchListItem";
import { matchesData } from "../data/matchesData";
import { motion } from "framer-motion";

const Matches = () => {
  const day = new Date().toString().slice(8, 10);
  const month = new Date().toString().slice(4, 7);
  const year = new Date().toString().slice(11, 15);
  const date = day + "-" + month + "-" + year;
  const convertTimeToEpochTime = Date.parse(date);

  const [newData, setNewData] = useState(matchesData);

  const filterMatchesToday = () => {
    setNewData(matchesData.filter((item) => item.date === date));
    // console.log(Date.now());
    // console.log(newData);
  };

  const filterMatchesPrevious = () => {
    setNewData(
      matchesData.filter(
        (item) => Date.parse(item.date) < convertTimeToEpochTime
      )
    );
    // console.log(newData);
  };

  const filterMatchesUpcoming = () => {
    setNewData(
      matchesData.filter(
        (item) => Date.parse(item.date) > convertTimeToEpochTime
      )
    );
    // console.log(newData);
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <MatchesContainer
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <TitleDiv>
        <h1>MATCHES</h1>
      </TitleDiv>
      <FiltersDiv>
        <FilterButton onClick={filterMatchesPrevious}>Previous</FilterButton>
        <FilterButton onClick={filterMatchesToday}>Today</FilterButton>
        <FilterButton onClick={filterMatchesUpcoming}>Upcoming</FilterButton>
      </FiltersDiv>
      {newData.map((item) => (
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

const FiltersDiv = styled.div`
  display: flex;
`;

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

const MatchesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px dashed blue; */
  margin-left: 80px;
  margin-top: 50px;

  @media (max-width: 800px) {
    margin: auto;
  }
`;

const FilterButton = styled(motion.button)`
  width: 100px;
  border-radius: 2px;

  background-color: var(--secondary-accent-clr);
  color: white;
  margin: 0 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  border-width: 0;

  :hover {
    transition-duration: 0.7s;
    transform: translateY(-1.6px);
  }

  :active {
    color: black;
    transform: translateY(0px);
  }
`;
