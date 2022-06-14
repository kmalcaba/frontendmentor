import { Author, Blog, StyledBlogCard, Title } from "./styles/BlogCard.styled";
import { Description } from "./styles/BlogCard.styled";

const BlogCard = ({ item: { title, author, body, image } }) => {
  return (
    <StyledBlogCard>
      <img src={`./images/${image}`} alt='' />
      <Blog>
        <Author>By {author}</Author>
        <Title>{title}</Title>
        <Description>{body}</Description>
      </Blog>
    </StyledBlogCard>
  );
};

export default BlogCard;
