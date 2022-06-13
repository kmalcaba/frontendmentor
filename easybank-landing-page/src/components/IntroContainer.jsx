import React from "react";
import { Title, Paragraph } from "./styles/Main.styled";
import {
  StyledIntroContainer,
  Intro,
  BgContainer,
  Image,
} from "./styles/IntroContainer.styled";
import { Button } from "./styles/Button.styled";

const IntroContainer = () => {
  return (
    <StyledIntroContainer>
      <Intro>
        <Title>Next generation digital banking</Title>
        <Paragraph>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Paragraph>
        <Button>Request Invite</Button>
      </Intro>
      <BgContainer>
        <Image src='./images/image-mockups.png' alt='' />
      </BgContainer>
    </StyledIntroContainer>
  );
};

export default IntroContainer;
