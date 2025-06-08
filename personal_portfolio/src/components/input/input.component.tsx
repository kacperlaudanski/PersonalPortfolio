import React from 'react';

import { ErrorMessage, InputElement, InputWrapper, LeftElement, RightElement, Wrapper } from './input.styled';
import { InputProps } from './input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const { className, errorMessage, leftElement, rightElement, withError, ...rest }: InputProps = props;

  return (
    <Wrapper>
      <InputWrapper $withError={!!withError} className={className}>
        {!!leftElement && <LeftElement>{leftElement}</LeftElement>}
        <InputElement {...rest} ref={ref} />
        {!!rightElement && <RightElement>{rightElement}</RightElement>}
      </InputWrapper>
      {!!withError && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </Wrapper>
  );
});
