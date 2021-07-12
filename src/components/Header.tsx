import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEvent } from 'react-use';
import { FiMenu, FiX } from 'react-icons/fi';

import vercelSVG from '../assets/svg/vercel.svg';

import {
  HeaderContainer,
  HeaderWrapper,
  MobileActions,
  NavLink,
} from '../styles/components/Header';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function onResize() {
    console.log('Test');
    if (window) {
      if (window.innerWidth > 840 && isOpen) setIsOpen(false);
    }
  }

  useEvent('resize', onResize);

  return (
    <HeaderContainer>
      <HeaderWrapper className={isOpen ? 'opened' : ''}>
        <Image
          src={vercelSVG}
          alt="Vercel"
          width={154.77}
          height={35}
          layout="fixed"
          priority
        />

        <nav>
          <Link href="/" passHref>
            <NavLink href="/">Home</NavLink>
          </Link>
          <Link href="/projects" passHref>
            <NavLink href="/projects">Projetos</NavLink>
          </Link>
          <Link href="/sponsor" passHref>
            <NavLink href="/sponsor">Apoiar</NavLink>
          </Link>
        </nav>

        <MobileActions className={isOpen ? 'opened' : ''}>
          <button onClick={() => setIsOpen(true)}>
            <FiMenu />
          </button>
          <button onClick={() => setIsOpen(false)}>
            <FiX />
          </button>
        </MobileActions>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
