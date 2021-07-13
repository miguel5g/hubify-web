import React from 'react';
import Image from 'next/image';

import shareSVG from '../assets/svg/share.svg';

import { Header } from '../components/Header';

import {
  BannerSection,
  HomeContainer,
  MainContainer,
} from '../styles/pages/Home';
import { Button } from '../components/Button';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <MainContainer>
        <Header />

        <BannerSection>
          <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              corrupti error tenetur labore harum tempora necessitatibus! Dolor
              expedita nobis nostrum vitae, vero perspiciatis, inventore
              delectus, corporis libero natus quas et?
            </span>

            <div>
              <Button isPrimary>Compartilhar</Button>
              <Button>Explorar</Button>
            </div>
          </div>

          <Image
            src={shareSVG}
            alt="Share illustration"
            layout="intrinsic"
            priority
          />
        </BannerSection>
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
