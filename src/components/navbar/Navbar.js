import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo></Logo>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  /* opacity: 0.3; */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 50px;
  width: 100%;
  /* border: 1px dashed pink; */
  background: linear-gradient(to right, #4776e6, #8e54e9);
  @media (max-width: 800px) {
    justify-content: flex-start;
    height: 40px;
    padding-left: 12px;
  }
`;
