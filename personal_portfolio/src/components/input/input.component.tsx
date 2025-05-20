import React from 'react';

import { InputElement, LeftElement, RightElement, Wrapper } from './input.styled';
import { InputProps } from './input.types';

export const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  const { className, leftElement, onChange, placeholder, rightElement, value, withError }: InputProps = props;

  return (
    <Wrapper $withError={!!withError} className={className}>
      {!!leftElement && <LeftElement>{leftElement}</LeftElement>}
      <InputElement onChange={onChange} placeholder={placeholder} value={value} />
      {!!rightElement && <RightElement>{rightElement}</RightElement>}
    </Wrapper>
  );
};
