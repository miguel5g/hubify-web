import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

import shareSVG from '../assets/svg/share.svg';
import decideSVG from '../assets/svg/decide.svg';

import { LinkButton } from '../components/LinkButton';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
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
    feedbacks: 9,
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
      <Head>
        <title>Uma vitrine de ideias e projetos - Hubify</title>
      </Head>

      <MainContainer>
        <Header />

        <BannerSection>
          <div>
            <h1>A melhor forma para exibir e avaliar suas ideias e projetos</h1>
            <span>Apresente e avalie as suas ideias/projetos.</span>

            <div>
              <Button
                onClick={() => {
                  toast('Infelizmente isso ainda não funciona...', {
                    icon: '🙁',
                  });
                }}
                isPrimary
              >
                Compartilhar
              </Button>
              <Link href="/projects" passHref>
                <LinkButton>Explorar</LinkButton>
              </Link>
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
              O segredo para desenvolver algo que realmente agrade as pessoas é
              ouvir comentários e sugestões para poder evoluir, e é ai que nós
              te ajudamos.
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
