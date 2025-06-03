import React from 'react';

import { ErrorMessage, InputElement, InputWrapper, LeftElement, RightElement, Wrapper } from './input.styled';
import { InputProps } from './input.types';

export const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  const { className, errorMessage, leftElement, rightElement, withError, ...rest }: InputProps = props;

  return (
    <Wrapper>
      <InputWrapper $withError={!!withError} className={className}>
        {!!leftElement && <LeftElement>{leftElement}</LeftElement>}
        <InputElement {...rest} />
        {!!rightElement && <RightElement>{rightElement}</RightElement>}
      </InputWrapper>
      {!!withError && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </Wrapper>
  );
};
