import styled from "styled-components";
import { MainContainer } from "./MainContainer.styled";

export const StyledHeader = styled.header``;

export const HeaderContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const NavGroup = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.li`
  list-style: none;
  padding: 0 20px;
  cursor: pointer;
`;
