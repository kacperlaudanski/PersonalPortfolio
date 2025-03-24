import { Button } from '../../../../components';
import { ButtonTheme, ButtonVariant } from '../../../../enums';
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
      <Button fullWidth label='Pokaz więcej' onClick={console.log('click')} theme={ButtonTheme.Default} variant={ButtonVariant.Medium} />
    </Wrapper>
  );
};
