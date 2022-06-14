import styled from "styled-components";
import { MainContainer } from "./MainContainer.styled";

export const StyledFeaturesContainer = styled.div`
  display: flex;
  /* height: 670px; */
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  padding: 105px 0 75px 0;
`;

export const Features = styled(MainContainer)``;
