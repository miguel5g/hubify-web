import React from 'react';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  passHref?: boolean;
}

export const Anchor: React.FC<AnchorProps> = ({
  children,
  href,
  passHref = true,
  ...props
}) => {
  return (
    <Link href={href} passHref={passHref}>
      <a {...props}>{children}</a>
    </Link>
  );
};
