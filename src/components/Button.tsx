import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from '../styles/components/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  ...props
}) => {
  return (
    <ButtonContainer type={type} {...props}>
      {children}
    </ButtonContainer>
  );
};
