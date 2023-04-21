import React from "react";
import styled from "styled-components";
import Logosrc from "../../../public/images/Merlin-logo-sm.png";
import Logolg from "../../../public/images/merlin-logo-lg.png";

const Container = styled.div`
  width: 80%;
  color: #fff;
  padding: 20px;
  margin: 10px auto;
`;

const Logo = styled.div`
  width: 70.53px;
  height: 21.41px;
  background: url(${Logosrc.src});
  @media (min-width: 852px) {
    width: 175px;
    height: 64.62px;
    background: url(${Logolg.src});
    background-size: contain;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Navbar;
