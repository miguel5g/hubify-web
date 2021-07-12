import React from 'react';
import Image from 'next/image';

import vercelSVG from '../assets/svg/vercel.svg';

import { HeaderContainer, NavLink } from '../styles/components/Header';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image src={vercelSVG} alt="Vercel" priority />

      <nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projetos</NavLink>
        <NavLink href="/sponsor">Apoiar</NavLink>
      </nav>
    </HeaderContainer>
  );
};
