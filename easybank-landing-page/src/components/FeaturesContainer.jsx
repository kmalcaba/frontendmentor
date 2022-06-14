import { Heading, Paragraph } from "./styles/Main.styled";
import {
  Features,
  StyledFeaturesContainer,
} from "./styles/FeaturesContainer.styled";
import { FlexContainer } from "./styles/FlexContainer.styled";
import content from "../content";
import FeatureCard from "./FeatureCard";

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
            <FeatureCard key={item.id} item={item} />
          ))}
        </FlexContainer>
      </Features>
    </StyledFeaturesContainer>
  );
};

export default FeaturesContainer;
