import React from "react";
import styled from "styled-components";

const BlueEffectBox = styled.div`
  position: absolute;
  right: -40%;
  top: -10%;
  width: 293px;
  height: 293px;
  background: #0038ff;
  filter: blur(200px);
  z-index: -1;
`;
const BlueExffect = () => {
  return <BlueEffectBox />;
};

export default BlueExffect;
