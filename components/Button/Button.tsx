import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { ButtonProps } from './interfaces';
import { ButtonLink } from './styles';

export const CustomButton = ({
  size,
  style,
  children,
  variant,
  href,
  color,
  onClick,
  disabled,
  type,
  testId,
  disableATag = true,
}: ButtonProps) => (
  <Button
    type={type}
    style={style}
    variant={variant}
    size={size}
    color={color}
    disabled={disabled}
    onClick={() => onClick()}
    data-testid={testId}
  >
    {disableATag ? children : <ButtonLink href={href}>{children}</ButtonLink>}
  </Button>
);

CustomButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error', 'info']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', undefined]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  testId: PropTypes.string,
  href: PropTypes.string,
};

CustomButton.defaultProps = {
  size: 'small',
  href: 'www.google.com',
  variant: 'contained',
  type: 'button',
  children: 'Children',
};
