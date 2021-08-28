import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useEvent } from 'react-use';

import { Anchor } from './Anchor';
import { LinkButton } from './LinkButton';

import logoSVG from '../assets/svg/logo.svg';

import {
  AuthContainer,
  Container,
  Mobile,
  Navigation,
  Overlay,
  Wrapper,
} from '../styles/components/Header';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>();

  useEvent('resize', handleResize);

  function handleResize() {
    if (window?.innerWidth >= 840 && isOpen) {
      setOpen(false);
    }
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target !== overlayRef.current) return;

    setOpen(false);
  }

  return (
    <Container>
      <Mobile>
        <Image src={logoSVG} alt="Hubify" width={150} height={25} />

        <button onClick={() => setOpen(true)}>
          <FiMenu />
        </button>
      </Mobile>

      <Overlay
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={classNames({ opened: isOpen })}
      />

      <Wrapper
        animate={isOpen ? 'opened' : 'closed'}
        variants={{
          opened: { width: 'max-content' },
          closed: { width: 0 },
        }}
      >
        <div className="logo-container">
          <Image src={logoSVG} alt="Hubify" width={150} height={25} />
        </div>

        <Navigation>
          <Anchor href="/">Início</Anchor>
          <Anchor href="/projects">Projetos</Anchor>
        </Navigation>

        <AuthContainer>
          <Link href="/signup" passHref>
            <LinkButton>Registrar</LinkButton>
          </Link>
          <Link href="/signin" passHref>
            <LinkButton isPrimary>Entrar</LinkButton>
          </Link>
        </AuthContainer>
      </Wrapper>
    </Container>
  );
};
