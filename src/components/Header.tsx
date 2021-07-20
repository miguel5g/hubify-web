import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEvent } from 'react-use';
import { FiMenu, FiX } from 'react-icons/fi';

import logoSVG from '../assets/svg/logo.svg';

import { LinkButton } from './LinkButton';

import {
  AuthActions,
  HeaderContainer,
  HeaderWrapper,
  MobileActions,
  NavLink,
} from '../styles/components/Header';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onResize() {
    if (window) {
      if (window.innerWidth > 840 && isOpen) setIsOpen(false);
    }
  }

  useEvent('resize', onResize);

  return (
    <HeaderContainer>
      <HeaderWrapper className={isOpen ? 'opened' : ''}>
        <Image
          src={logoSVG}
          alt="Logo"
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

        <AuthActions className={isOpen ? 'opened' : ''}>
          <Link href="/signup" passHref>
            <LinkButton>Registrar</LinkButton>
          </Link>
          <Link href="/signin" passHref>
            <LinkButton isPrimary>Entrar</LinkButton>
          </Link>
        </AuthActions>

        <MobileActions className={isOpen ? 'opened' : ''}>
          <button
            onClick={() => {
              if (window && window.scrollY === 0) window.scrollTo({ top: 1 });
              setIsOpen(true);
            }}
          >
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
