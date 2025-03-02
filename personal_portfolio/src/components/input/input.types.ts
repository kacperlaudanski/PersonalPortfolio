import { ReactNode, SyntheticEvent } from 'react';

export interface InputProps {
  onChange: (e: SyntheticEvent) => void;
  placeholder: string;
  value: string | number;
  className?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}
