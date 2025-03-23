import { Detail, DetailsContainer, Dot, Image, Title, Wrapper } from './bookCard.styled';
import { BookCardProps } from './bookCard.types';

export const BookCard: React.FC<BookCardProps> = (props: BookCardProps): JSX.Element => {
  const { author, image, title, year }: BookCardProps = props;

  return (
    <Wrapper>
      <Image alt='book-cover' src={image} />
      <Title>{title}</Title>
      <DetailsContainer>
        <Detail>{author}</Detail>
        <Dot />
        <Detail>{year}</Detail>
      </DetailsContainer>
    </Wrapper>
  );
};
