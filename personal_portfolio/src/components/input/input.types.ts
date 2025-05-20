import { ReactNode, SyntheticEvent } from 'react';

export interface InputProps {
  onChange: (e: SyntheticEvent) => void;
  placeholder: string;
  type: string;
  className?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  value?: string | number;
  withError?: boolean;
}

export interface WrapperProps {
  $withError: boolean;
}