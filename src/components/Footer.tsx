import React from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';

import { FooterContainer, FooterWrapper } from '../styles/components/Footer';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <span>Feito com ❤ by Miguel Ângelo</span>

        <div>
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <FiGithub />
          </a>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};
