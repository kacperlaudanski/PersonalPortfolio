import { HeadlineVariant } from '../../enums';
import { Counter, CounterContainer, Dot, HeadlineText, Wrapper } from './headline.styled';
import { HeadlineProps } from './headline.types';

export const Headline: React.FC<HeadlineProps> = (props: HeadlineProps): JSX.Element => {
  const { counter, headline, className, variant }: HeadlineProps = props;

  return (
    <Wrapper className={className}>
      <HeadlineText>{headline}</HeadlineText>
      {variant === HeadlineVariant.Counter && (
        <CounterContainer>
          <Dot />
          <Counter>{counter}</Counter>
        </CounterContainer>
      )}
    </Wrapper>
  )
}
