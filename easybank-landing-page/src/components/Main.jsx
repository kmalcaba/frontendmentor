import {
  StyledMain,
  IntroContainer,
  Intro,
  Title,
  Paragraph,
  Image,
  BgContainer,
} from "./styles/Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <IntroContainer>
        <Intro>
          <Title>Next generation digital banking</Title>
          <Paragraph>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Paragraph>
        </Intro>
        <BgContainer>
          <Image src='./images/image-mockups.png' alt='' />
        </BgContainer>
      </IntroContainer>
    </StyledMain>
  );
};

export default Main;
