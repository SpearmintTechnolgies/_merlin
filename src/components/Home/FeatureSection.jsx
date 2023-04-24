import React from "react";
import styled from "styled-components";
import ArrowIconSrc from "../../../public/images/Arrow-sm.png";
import DeployNFTsrc from "../../../public/images/Self-deploying-nft-sm.png";
import readmore from "../../../public/images/read-more-button.png";
import TradeYourNFTssrc from "../../../public/images/trade-your-nfs-sm.png";
import VoiletEffect from "../VoiletEffect/VoiletEffect";
import MoreOrLessSrc from "../../../public/images/More-or-less-sm.png";
import BlueExffect from "../BlueEffect/BlueExffect";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 150px;
  text-align: center;
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
  @media (min-width: 552px) {
    font-size: 60px;
  }
`;
const HeadingTwo = styled.h2`
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 124.5%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  @media (min-width: 552px) {
    font-size: 40px;
  }
`;
const ColorHeading = styled(Heading)`
  background: -webkit-linear-gradient(#00ffff, #9600f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const FlexWrapper = styled.div`
  display: flex;
  max-width: 350px;
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (min-width: 552px) {
    max-width: 450px;
  }
`;

const ArrowIcon = styled.div`
  width: 265px;
  height: 73.8px;
  background: url(${ArrowIconSrc.src});
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(-50px);
  margin: 10px auto;
  @media (min-width: 552px) {
    width: 300px;
    height: 100px;
  }
`;

const DeployNFTImage = styled.div`
  width: 100%;
  height: 229.67px;
  background: url(${DeployNFTsrc.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (min-width: 552px) {
    height: 300px;
  }
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
  margin: 0 auto;
  width: 90%;
  @media (min-width: 552px) {
    font-size: 15px;
  }
`;
const ConnectButton = styled.button`
  background: radial-gradient(
        130.72% 401.52% at -8.21% 47.37%,
        #00ffff 0%,
        #9600f1 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #9600f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  border: none;
  font-size: 14px;
  line-height: 90.5%;
  letter-spacing: -0.03em;
  color: #ffffff;
  width: 130px;
  height: 40px;
  position: relative;
  cursor: pointer;
  margin: 5px;
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
const TradeYourNFTsImage = styled.div`
  width: 100%;
  height: 229.67px;
  background: url(${TradeYourNFTssrc.src});
  background-repeat: no-repeat;
  background-position: 0;
`;
const MoreOrLessImage = styled.div`
  width: 100%;
  height: 229.67px;
  background: url(${MoreOrLessSrc.src});
  background-repeat: no-repeat;
  background-position: 0;
`;
const FeatureSection = () => {
  return (
    <Container>
      {/* Feature Section -  title */}
      <FlexWrapper direction="column" margin="0 auto">
        <div>
          <Heading>All we have is</Heading>
          <ColorHeading>Everything</ColorHeading>
        </div>
        <ArrowIcon />
      </FlexWrapper>
      <BlueExffect />
      {/* Feature Section -  self deploying NFTs */}
      <FlexWrapper direction="column" margin="20px auto">
        <div>
          <HeadingTwo>Self Deploying NFT Collection</HeadingTwo>
        </div>
        <div>
          <DeployNFTImage />
          <Text>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries
          </Text>
          <FlexWrapper>
            <ConnectButton>Connect Wallet</ConnectButton>
            <ReadMoreButton>Read More</ReadMoreButton>
          </FlexWrapper>
        </div>
      </FlexWrapper>

      {/* Feature Section -  Trade your NFTs */}
      <FlexWrapper direction="column" margin="20px auto">
        <div>
          <HeadingTwo>Trade your NFTs or Token you have</HeadingTwo>
        </div>
        <VoiletEffect />
        <div>
          <TradeYourNFTsImage />
          <Text>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries
          </Text>

          <FlexWrapper>
            <ConnectButton>Connect Wallet</ConnectButton>
            <ReadMoreButton>Read More</ReadMoreButton>
          </FlexWrapper>
        </div>
      </FlexWrapper>

      {/* Feature Section -  What you like to carry */}
      <FlexWrapper direction="column" margin="20px auto">
        <div>
          <HeadingTwo>What you like to carry ? More or less ?</HeadingTwo>
        </div>
        <BlueExffect />
        <div>
          <MoreOrLessImage />

          <Text>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries
          </Text>

          <FlexWrapper>
            <ConnectButton>Connect Wallet</ConnectButton>
            <ReadMoreButton>Read More</ReadMoreButton>
          </FlexWrapper>
        </div>
      </FlexWrapper>
    </Container>
  );
};

export default FeatureSection;
