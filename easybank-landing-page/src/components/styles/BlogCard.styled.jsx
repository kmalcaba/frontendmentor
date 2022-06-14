import styled from "styled-components";
import { Paragraph } from "./Main.styled";

export const StyledBlogCard = styled.div`
  max-width: 255px;
  margin: 28px 30px 0 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Blog = styled.div`
  padding: 30px 25px 25px 25px;
`;

export const Author = styled.p`
  font-size: 0.6rem;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h4`
  font-weight: 300;
  margin: 12px 0;
`;

export const Description = styled(Paragraph)`
  font-size: 0.72rem;
  line-height: 1rem;
  margin: 0;
`;
