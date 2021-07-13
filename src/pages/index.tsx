import React from 'react';
import Image from 'next/image';

import shareSVG from '../assets/svg/share.svg';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjetcCard';

import {
  BannerSection,
  HighlightSection,
  HomeContainer,
  MainContainer,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const projectSample = {
    id: 'sample',
    title: 'Social Network',
    description: 'Um simples projeto para desenvolver abilidaes',
    stars: 113,
    comments: 9,
    impulses: 38,
  };

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

        <HighlightSection>
          <h2>Projetos em destaque</h2>

          <div>
            <ProjectCard project={projectSample} />
            <ProjectCard project={projectSample} />
            <ProjectCard project={projectSample} />
          </div>
        </HighlightSection>
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
