import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import notFoundSVG from '../assets/svg/not-found.svg';

import { LinkButton } from '../components/LinkButton';

import { NotFoundContainer } from '../styles/pages/NotFound';

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Head>
        <title>Página não encontrada - Hubify</title>
      </Head>

      <div>
        <Image src={notFoundSVG} alt="Page not found" layout="responsive" />
      </div>

      <strong>Página não encontrada...</strong>
      <span>
        Lamentamos mas esta página não existe ou está em construção 😕
      </span>

      <Link href="/" passHref>
        <LinkButton isPrimary>Voltar para o ínicio</LinkButton>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFound;
