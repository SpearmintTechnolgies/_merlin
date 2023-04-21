import React from "react";
import styled from "styled-components";

const VoiletEffectBox = styled.div`
  position: absolute;
  left: -40%;
  width: 293px;
  height: 293px;
  background: #9600f1;
  filter: blur(200px);
  z-index: -1;
`;
const VoiletEffect = ({ top }) => {
  return <VoiletEffectBox top={top} />;
};

export default VoiletEffect;
