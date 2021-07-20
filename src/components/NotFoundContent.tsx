import React from 'react';
import Image from 'next/image';

import notFoundSVG from '../assets/svg/not-found.svg';

import {
  ImageWrapper,
  NotFoundContentContainer,
} from '../styles/components/NotFoundContent';

export const NotFoundContent: React.FC = () => {
  return (
    <NotFoundContentContainer>
      <ImageWrapper>
        <Image src={notFoundSVG} alt="Page not found" layout="responsive" />
      </ImageWrapper>
      <strong>Oops</strong>
      <span>O conteúdo que procura não foi encontrado.</span>
    </NotFoundContentContainer>
  );
};
