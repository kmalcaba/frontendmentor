import {
  StyledHeader,
  NavGroup,
  NavButton,
  HeaderContainer,
} from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <img src='./images/logo.svg' alt='' />
        {/* <Logo src='./images/logo.svg' alt='' /> */}
        <NavGroup>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Contact</NavButton>
          <NavButton>Blog</NavButton>
          <NavButton>Careers</NavButton>
        </NavGroup>
        <Button>Request Invite</Button>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
