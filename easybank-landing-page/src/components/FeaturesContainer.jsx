import { Heading, Paragraph } from "./styles/Main.styled";
import {
  Features,
  StyledFeaturesContainer,
} from "./styles/FeaturesContainer.styled";
import { FlexContainer } from "./styles/FlexContainer.styled";
import content from "./content";

const FeaturesContainer = () => {
  return (
    <StyledFeaturesContainer>
      <Features>
        <Heading>Why choose Easybank?</Heading>
        <Paragraph>
          We leverage open banking to turn your bank account into your financial
          hub.
          <br />
          Control your finances like never before.
        </Paragraph>
        <FlexContainer>
          {content.map((item) => (
            <div key={item.id}>
              <img src={`./images/${item.image}`} alt='' />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </FlexContainer>
      </Features>
    </StyledFeaturesContainer>
  );
};

export default FeaturesContainer;
