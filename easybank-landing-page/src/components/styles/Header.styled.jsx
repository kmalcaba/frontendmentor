import styled from "styled-components";
import { MainContainer } from "./MainContainer.styled";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
`;

export const NavGroup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.li`
  list-style: none;
  padding: 0 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: "Public Sans", sans-serif;
  font-size: 0.8rem;
`;
