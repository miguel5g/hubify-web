import React from 'react';
import { FiGithub, FiTwitter } from 'react-icons/fi';

import { FooterContainer, FooterWrapper } from '../styles/components/Footer';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <span>Feito com ❤ by Miguel Ângelo</span>

        <div>
          <a
            href="https://twitter.com/guel5g/"
            target="__blank"
            rel="noopener noreferrer"
            arial-label="Hubify Twitter"
          >
            <FiTwitter />
          </a>
          <a
            href="https://github.com/miguel5g/hubify-web/"
            target="__blank"
            rel="noopener noreferrer"
            arial-label="Hubify Github"
          >
            <FiGithub />
          </a>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};
