import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlideRightContext } from "../../helpers/Contexts";

const SidebarBtn = (props) => {
  const { slideRight, setSlideRight } = useContext(SlideRightContext);

  return (
    <Link to={props.linkTo}>
      <BtnComponent onClick={() => setSlideRight(!slideRight)}>
        {props.imgSrc}
        <h5>{props.name}</h5>
      </BtnComponent>
    </Link>
  );
};

export default SidebarBtn;

const BtnComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  color: var(--primary-iconHeading-clr);
  /* border: 1px dashed cyan; */

  :hover {
    transition-duration: 0.7s;

    svg {
      padding: 0;
    }
  }

  svg {
    /* display: block; */
    width: 44px;
    height: 44px;
    padding: 3px;
    fill: var(--primary-icon-clr);
    transition-duration: 0.3s;
  }
`;
