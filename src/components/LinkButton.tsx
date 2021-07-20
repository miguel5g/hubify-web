import React, { AnchorHTMLAttributes } from 'react';

import { LinkButtonContainer } from '../styles/components/LinkButton';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isPrimary?: boolean;
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref) => <LinkButtonContainer ref={ref as any} {...props} />
);

LinkButton.displayName = 'LinkButton';
