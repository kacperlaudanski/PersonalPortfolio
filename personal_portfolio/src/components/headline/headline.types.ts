import { HeadlineVariant } from '../../enums';

export interface HeadlineProps {
  counter: number;
  headline: string;
  variant: HeadlineVariant;
  className?: string;
}