import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  errorMessage?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  withError?: boolean;
}

export interface WrapperProps {
  $withError: boolean;
}
