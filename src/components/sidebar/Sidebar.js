import styled from "styled-components";
import { sidebarData } from "../../data/data";
import SidebarBtn from "./SidebarBtn";
import { ReactComponent as MenuIcon } from "../../icons/noun_menu_2235826.svg";
import { useContext } from "react";
import { SlideRightContext } from "../../helpers/Contexts";

const Sidebar = () => {
  const { slideRight, setSlideRight } = useContext(SlideRightContext);

  return (
    <ParentContainer>
      <SidebarContainer slideRight={slideRight}>
        {sidebarData.map((item) => (
          <SidebarBtn
            linkTo={item.to}
            imgSrc={item.ic}
            name={item.name}
            key={item.name}
          ></SidebarBtn>
        ))}
      </SidebarContainer>

      <MenuBtnContainer
        onClick={() => {
          console.log(slideRight);
          setSlideRight(!slideRight);
        }}
      >
        <MenuIcon />
      </MenuBtnContainer>
    </ParentContainer>
  );
};

export default Sidebar;

const ParentContainer = styled.div`
  overflow-x: hidden;
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

const SidebarContainer = styled.nav`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  position: fixed;
  content: "";
  top: 0;
  width: 80px;
  height: 100%;
  background: linear-gradient(#4776e6, #8e54e9);
  z-index: 3;
  transition-duration: 0.7s;
  @media (max-width: 800px) {
    right: ${(props) => (props.slideRight ? "-80px" : 0)};

    top: 0;
    background: linear-gradient(#8e54e9, #4776e6);
  }
  a {
    text-decoration: none;
  }
`;

const MenuBtnContainer = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    position: sticky;
    margin-right: 6px;
    height: 40px;
    width: 40px;
    /* border: 1px dashed brown; */
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  svg {
    fill: white;
    height: 24px;
    margin: 8px;
  }
`;
