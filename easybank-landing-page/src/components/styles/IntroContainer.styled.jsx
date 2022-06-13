import styled from "styled-components";
import { MainContainer } from "./MainContainer.styled";

export const StyledIntroContainer = styled(MainContainer)`
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
