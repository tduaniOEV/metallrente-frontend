import { CSSProperties, ReactElement } from 'react';

export type buttonColor =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'error'
  | 'info';
export type buttonVariant = 'text' | 'contained' | 'outlined';
export type buttonType = 'submit' | 'reset' | 'button';
export type buttonSize = 'small' | 'medium' | 'large';
export type ChildComponent = ReactElement | string | ReactElement[];

export type ButtonProps = {
  variant: buttonVariant;
  size?: buttonSize;
  children: ChildComponent;
  type: buttonType;
  onClick: () => void;
  style?: CSSProperties;
  color?: buttonColor;
  disabled?: boolean;
  testId?: string | null;
  href?: string;
  disableATag?: boolean;
};
