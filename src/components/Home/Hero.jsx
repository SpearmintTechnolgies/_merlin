import React from "react";
import styled from "styled-components";
import heroImage from "../../../public/images/Hero-image-sm.png";
import readmore from "../../../public/images/read-more-button.png";
import VoiletEffect from "../VoiletEffect/VoiletEffect";
import rectangle from "../../../public/images/Rectangle-sm.png";
import rectangleLarge from "../../../public/images/LargeRectangle.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  text-align: center;
`;
const HeadingContainer = styled.div`
  width: 100%;
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
const HeroImageContainer = styled.div`
  width: 318px;
  height: 338.69px;
  margin: 0 auto;
  background: url(${heroImage.src});
  background-size: contain;
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
const Buttonwrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
  margin: 5px;
  cursor: pointer;
`;
const OnOurWayContainer = styled.div`
  width: 100%;
`;
const HeadingTwo = styled.h3`
  font-family: "Quantico";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 110.5%;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-transform: capitalize;
`;
const FlexWrapper = styled.div`
  display: flex;
  max-width: 350px;
  margin: 5px auto;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const GridItemRectangle = styled.div`
  grid-area: rectangle;
  width: 145px;
  height: 79px;
  margin: 2px;
  background: url(${rectangle.src});
`;
const GridItemLargeRectangle = styled.div`
  grid-area: rectangleLg;
  width: 299px;
  height: 96px;
  margin: 2px;
  background: url(${rectangleLarge.src});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ColoredTitle = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 43px;
  letter-spacing: -0.03em;
  background: linear-gradient(106.87deg, #9600f1 6.75%, #00ffff 99.27%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  mix-blend-mode: normal;
  margin: 2px;
`;
const Hero = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Welcome to the</Heading>
        <ColorHeading>Universe of NFTs</ColorHeading>
      </HeadingContainer>
      <HeroImageContainer />
      <Text>
        Lorem ipsum is placeholder text commonly the graphic, print, and
        publishing more..
      </Text>
      <Buttonwrapper>
        <ConnectButton>Connect Wallet</ConnectButton>
        <ReadMoreButton>Read More</ReadMoreButton>
      </Buttonwrapper>
      <VoiletEffect />
      <OnOurWayContainer>
        <HeadingTwo>On our way!</HeadingTwo>
        <div>
          <FlexWrapper>
            <GridItemRectangle>
              <ColoredTitle>2000+</ColoredTitle>
              <Text>NFT Collections</Text>
            </GridItemRectangle>
            <GridItemRectangle>
              <ColoredTitle>15+</ColoredTitle>
              <Text>NFT Collections</Text>
            </GridItemRectangle>
          </FlexWrapper>
          <FlexWrapper direction={"column"}>
            <GridItemLargeRectangle>
              <ColoredTitle>100000+</ColoredTitle>
              <Text>Users</Text>
            </GridItemLargeRectangle>
            <GridItemLargeRectangle>
              <ColoredTitle>150000</ColoredTitle>
              <Text>Transactions</Text>
            </GridItemLargeRectangle>
          </FlexWrapper>
        </div>
      </OnOurWayContainer>
    </Container>
  );
};

export default Hero;
