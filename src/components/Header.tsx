import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEvent } from 'react-use';
import { FiMenu, FiUser } from 'react-icons/fi';
import { motion, Variants } from 'framer-motion';

import logoSVG from '../assets/svg/logo.svg';

import { useAuth } from '../hooks/useAuth';

import { Anchor } from './Anchor';
import { LinkButton } from './LinkButton';

import {
  ContentWrapper,
  HeaderContainer,
  HeaderWrapper,
} from '../styles/components/Header';

export const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(true);

  const contentRef = useRef<HTMLDivElement>();
  const { isAuth, user } = useAuth();

  useEvent('resize', onResize);

  useEffect(() => {
    if (window && window.innerHeight >= 840) setMobile(false);
    else if (window && window.innerHeight < 840) setMobile(true);
  }, []);

  function onResize() {
    if (window) {
      if (window.innerWidth >= 840) {
        if (isOpen) setOpen(false);
        setMobile(false);
      } else if (window.innerWidth < 840) {
        setMobile(true);
      }
    }
  }

  function handleContentClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === contentRef.current) setOpen(false);
  }

  const contentWrapperVariants: Variants = {
    opened: {
      opacity: 1,
      pointerEvents: 'auto',
    },
    closed: {
      opacity: 0,
      pointerEvents: 'none',
    },
  };

  const contentVariants: Variants = {
    opened: {
      opacity: 1,
      width: 'max-content',
    },
    closed: {
      opacity: 0,
      width: 0,
    },
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div className="logo-wrapper">
          <Image src={logoSVG} alt="Hubify" layout="fill" priority />
        </div>

        <button onClick={() => setOpen(true)}>
          <FiMenu />
        </button>

        {isMobile ? (
          <ContentWrapper
            ref={contentRef}
            onClick={handleContentClick}
            variants={contentWrapperVariants}
            animate={isOpen ? 'opened' : 'closed'}
          >
            <motion.div
              variants={contentVariants}
              animate={isOpen ? 'opened' : 'closed'}
            >
              <div className="logo-wrapper">
                <Image src={logoSVG} alt="Hubify" layout="fill" priority />
              </div>

              <nav>
                <Anchor href="/">Home</Anchor>
                <Anchor href="/projects">Projetos</Anchor>

                {isAuth && isMobile && (
                  <>
                    <div className="separator" />
                    <Anchor href="/projects">Perfil</Anchor>
                    <Anchor href="/projects">Meus projetos</Anchor>
                    <Anchor href="/signout">Sair</Anchor>
                  </>
                )}
              </nav>

              {isAuth ? (
                <div className="user-info">
                  {user.avatar_url ? (
                    <Image
                      src={user.avatar_url}
                      height={33}
                      width={33}
                      objectFit="contain"
                      alt={`${user.username}'s profile`}
                      loader={({ src }) => src}
                    />
                  ) : (
                    <div className="default-user">
                      <FiUser />
                    </div>
                  )}
                  <span>{user.username}</span>
                </div>
              ) : (
                <div className="auth">
                  <Link href="/signup" passHref>
                    <LinkButton>Registrar</LinkButton>
                  </Link>
                  <Link href="/signin" passHref>
                    <LinkButton isPrimary>Entrar</LinkButton>
                  </Link>
                </div>
              )}
            </motion.div>
          </ContentWrapper>
        ) : (
          <div>
            <nav>
              <Anchor href="/">Home</Anchor>
              <Anchor href="/projects">Projetos</Anchor>

              {isAuth && isMobile && (
                <>
                  <div className="separator" />
                  <Anchor href="/projects">Perfil</Anchor>
                  <Anchor href="/projects">Meus projetos</Anchor>
                  <Anchor href="/signout">Sair</Anchor>
                </>
              )}
            </nav>

            {isAuth ? (
              <div className="user-info">
                {user.avatar_url ? (
                  <Image
                    src={user.avatar_url}
                    height={33}
                    width={33}
                    objectFit="contain"
                    alt={`${user.username}'s profile`}
                    loader={({ src }) => src}
                  />
                ) : (
                  <div className="default-user">
                    <FiUser />
                  </div>
                )}
                <span>{user.username}</span>
              </div>
            ) : (
              <div className="auth">
                <Link href="/signup" passHref>
                  <LinkButton>Registrar</LinkButton>
                </Link>
                <Link href="/signin" passHref>
                  <LinkButton isPrimary>Entrar</LinkButton>
                </Link>
              </div>
            )}
          </div>
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
};
