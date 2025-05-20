import { styled } from 'styled-components';

import { Color, FontWeight } from '../../../../enums';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px;
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.h1`
  font-size: 42px;
  font-weight: ${FontWeight.Light};
`;

export const Subheader = styled.p`
  font-size: 12px;
  margin: 12px 0;
  color: ${Color.Gray400};
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const AgreementContainer = styled.div`
  margin: 20px 0;
`;
