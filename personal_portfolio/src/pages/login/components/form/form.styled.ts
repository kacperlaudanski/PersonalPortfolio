import { Chip } from '@mui/material';
import { styled } from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledChip = styled(Chip)`
  align-self: baseline;
  margin-top: 20px;
`;
