import styled from "styled-components";
import bat from "../../icons/cricket-bat.svg";
import ball from "../../icons/cricket-ball.svg";
import { motion } from "framer-motion";

const batVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const ballVariants = {
  //   hidden: {
  //     y: -100,
  //   },
  visible: {
    y: [-100, 0, -20, 0.5, -6, 0],
    x: [-40, -106.5],
    transition: {
      delay: 1.2,
    },
  },
  onMobile: {
    y: [-100, 0, -20, 0.5, -6, -0.7],
    x: [-40, -80.6],
    transition: {
      delay: 1.2,
    },
  },
};

let innerWidth = window.innerWidth;

const Logo = () => {
  return (
    <LogoContainer>
      <h1
        onClick={() => {
          console.log(typeof innerWidth, innerWidth);
        }}
      >
        SydneyCric
      </h1>
      <motion.img
        src={bat}
        variants={batVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        src={ball}
        variants={ballVariants}
        // initial="hidden"
        animate={innerWidth > 800 ? "visible" : "onMobile"}
      />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--primary-icon-clr);
    font-size: 30px;
    @media (max-width: 800px) {
      font-size: 22px;
    }
  }

  img {
    width: 16px;
    :nth-child(2) {
      width: 46px;
    }
    @media (max-width: 800px) {
      width: 11.9px;
      :nth-child(2) {
        width: 36px;
      }
    }
  }
`;
