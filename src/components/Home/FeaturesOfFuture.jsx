import React from "react";
import styled from "styled-components";
import SafeThanEverSrc from "../../../public/images/safer-than-ever-sm.png";
import BlockChainSrc from "../../../public/images/block-chain-card-sm.png";
import SecurethanEverSrc from "../../../public/images/secure-than-ever-sm.png";

import readmore from "../../../public/images/read-more-button.png";
import VoiletEffect from "../VoiletEffect/VoiletEffect";
import BlueExffect from "../BlueEffect/BlueExffect";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  text-align: center;
`;
const FlexWrapper = styled.div`
  display: flex;
  max-width: 350px;
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: ${(props) => props.position};
`;
const Heading = styled.h1`
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 110.5%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;
`;
const ColorHeading = styled(Heading)`
  background: -webkit-linear-gradient(#00ffff, #9600f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Text = styled.p`
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 163.5%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;
`;
const ReadMoreButton = styled.div`
  width: 130px;
  height: 50px;
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 3;
  color: #fff;
  letter-spacing: -0.03em;
  background: url(${readmore.src});
  background-size: 100% 100%;
  margin: 15px 0 0;
  cursor: pointer;
`;
const SafeThanEverCard = styled.div`
  width: 279px;
  height: 276.5px;
  margin: 20px auto;
  background: url(${SafeThanEverSrc.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const BlockChainCard = styled(SafeThanEverCard)`
  background: url(${BlockChainSrc.src});
  background-repeat: no-repeat;
  background-size: contain;
`;
const SecureThanEvercard = styled(SafeThanEverCard)`
  background: url(${SecurethanEverSrc.src});
  background-repeat: no-repeat;
  background-size: contain;
`;
const CardHeading = styled.h3`
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 132.5%;
  letter-spacing: -0.03em;
  color: #ffffff;
  mix-blend-mode: normal;
  margin-top: 100px;
`;

const FeaturesOfFuture = () => {
  return (
    <Container>
      <VoiletEffect />
      <FlexWrapper direction={"column"}>
        <div>
          <Heading>Features of</Heading>
          <ColorHeading>Future</ColorHeading>
        </div>
        <FlexWrapper direction="column" margin="20px auto" position="relative">
          <SafeThanEverCard>
            <CardHeading>Safe than ever</CardHeading>
            <Text>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print
            </Text>
            <ReadMoreButton>Read More</ReadMoreButton>
          </SafeThanEverCard>
          <BlockChainCard>
            <CardHeading>Block-Chain</CardHeading>
            <Text>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print
            </Text>
            <ReadMoreButton>Read More</ReadMoreButton>
          </BlockChainCard>
          <BlueExffect top={60} />
          <SecureThanEvercard>
            <CardHeading>Secure than ever</CardHeading>
            <Text>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print,
            </Text>
            <ReadMoreButton>Read More</ReadMoreButton>
          </SecureThanEvercard>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default FeaturesOfFuture;
