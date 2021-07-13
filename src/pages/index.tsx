import React from 'react';
import Image from 'next/image';

import shareSVG from '../assets/svg/share.svg';
import decideSVG from '../assets/svg/decide.svg';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjetcCard';
import { Footer } from '../components/Footer';
import { Feedback } from '../components/Feedback';

import {
  BannerSection,
  DecideSection,
  FeedbackSection,
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

  const feedbackSample = {
    id: 'sample',
    title: 'Titulo do feedback',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere eius maxime aspernatur dolor numquam, adipisci debitis assumenda omnis praesentium nesciunt sequi, quo obcaecati nisi dolores reprehenderit neque expedita. Omnis!',
    author: 'Miguel Ângelo',
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

        <DecideSection>
          <div>
            <Image src={decideSVG} alt="Decide" layout="responsive" />
          </div>

          <div>
            <strong>Porque usar o Hubify?</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              quisquam, dicta ipsum sunt provident voluptates dolorem a dolores
              vitae quidem corporis sequi praesentium error dolore magnam ut
              beatae? Commodi, doloremque.
            </p>
          </div>
        </DecideSection>

        <FeedbackSection>
          <h2>Feedbacks</h2>

          <div>
            <Feedback feedback={feedbackSample} />
            <Feedback feedback={feedbackSample} />
            <Feedback feedback={feedbackSample} />
          </div>
        </FeedbackSection>
      </MainContainer>

      <Footer />
    </HomeContainer>
  );
};

export default Home;
