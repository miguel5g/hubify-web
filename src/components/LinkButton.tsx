import React, { AnchorHTMLAttributes } from 'react';

import { LinkButtonContainer } from '../styles/components/LinkButton';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isPrimary?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  ...props
}) => {
  return <LinkButtonContainer {...props}>{children}</LinkButtonContainer>;
};
