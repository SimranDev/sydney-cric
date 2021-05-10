import styled from "styled-components";
import { ReactComponent as UmpireIcon } from "../icons/noun_umpire out_2005485.svg";
import { ReactComponent as LocationIcon } from "../icons/noun_Location_1041848.svg";

const MatchListItem = (props) => {
  return (
    <MatchListItemContainer>
      <DateTimeDiv>
        <DateDiv>
          <h2>{props.date}</h2>
        </DateDiv>
        <h3>{props.time}</h3>
      </DateTimeDiv>
      <TeamsVsDiv>
        <Team>
          <img src={props.teamAImg} alt="" />
          <TeamName>
            <h5>{props.teamAName}</h5>
          </TeamName>
        </Team>
        <h3>V</h3>
        <Team>
          <img src={props.teamBImg} alt="" />
          <TeamName>
            <h5>{props.teamBName}</h5>
          </TeamName>
        </Team>
      </TeamsVsDiv>
      <MatchDetailsDiv>
        <RightDiv>
          <UmpireDiv>
            <UmpireIcon />
            <h4>{props.umpireName}</h4>
          </UmpireDiv>
          <ChipsDiv>
            <MatchType bgColor="brown">
              <h5>Team</h5>
            </MatchType>
            <MatchType bgColor="darkOrange">
              <h5>L</h5>
            </MatchType>
            <MatchType bgColor="green">
              <h5>ODI</h5>
            </MatchType>
          </ChipsDiv>
          <LocationDiv>
            <LocationIcon />
            <h4>{props.location}</h4>
          </LocationDiv>
        </RightDiv>
      </MatchDetailsDiv>
    </MatchListItemContainer>
  );
};

export default MatchListItem;

const TeamName = styled.div`
  /* border: 1px dashed cyan; */
  display: flex;
  height: 40px;
  text-align: center;
  overflow: hidden;
  justify-content: center;
  /* align-items: center; */

  h5 {
    text-overflow: ellipsis;
    word-wrap: break-word;
    /* line-height: 20px; */
  }
`;

const MatchType = styled.div`
  margin-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  background-color: ${(props) => props.bgColor};
  /* border-radius: 10px; */

  h5 {
    color: white;
  }
`;

const ChipsDiv = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  /* margin-right: 20px; */
`;

const LocationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    height: 14px;
    width: 20px;
    fill: var(--list-icon-clr);
  }
`;

const UmpireDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    height: 18px;
    width: 20px;
    fill: var(--list-icon-clr);
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MatchDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  /* border: 1px dashed blueviolet; */
`;

const Team = styled.div`
  /* border: 1px dashed red; */
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  justify-content: space-between;
  img {
    margin-top: 16px;
    height: 50px;
    width: 50px;
    border-radius: 14px;
  }
`;

const TeamsVsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  /* border: 1px dashed green; */
  display: flex;
  border-right: 2px solid #8e54e9;
`;

const DateDiv = styled.div`
  display: flex;
  align-items: baseline;
  border-bottom: 0.5px dashed #8e54e9;
  p {
    font-size: 10px;
    color: var(--list-icon-clr);
  }
  /* justify-content: space-between; */
`;

const DateTimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 100%;
  border-right: 2px solid #8e54e9;
`;

const MatchListItemContainer = styled.div`
  display: flex;
  width: 80%;
  height: 120px;
  margin-top: 20px;
  padding: 4px;
  background-color: var(--list-bg-clr);

  @media (max-width: 900px) {
    width: 94%;
  }
`;
