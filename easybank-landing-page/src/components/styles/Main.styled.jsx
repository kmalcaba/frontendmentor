import styled from "styled-components";
import { MainContainer } from "./MainContainer.styled";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IntroContainer = styled(MainContainer)`
  display: flex;
  height: 655px;
  padding-right: 0;
  justify-content: space-around;
`;

export const Intro = styled.div`
  flex: 1 0 auto;
  max-width: 460px;
  margin-right: 100px;
`;

export const Title = styled.h1`
  margin-top: 180px;
  font-weight: 300;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text_secondary};
  line-height: 1.5rem;
  margin: 30px 0;
`;

export const BgContainer = styled.div`
  position: relative;
  background-image: url(./images/bg-intro-desktop.svg);
  background-repeat: no-repeat;
  background-position: 10% 50%;
  flex: 1;
`;

export const Image = styled.img`
  transform: translateY(-12%) translateX(18%);
  position: absolute;
  right: 0;
`;
