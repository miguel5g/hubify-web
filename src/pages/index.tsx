import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { toast } from 'react-hot-toast';
import { FiGithub } from 'react-icons/fi';

import { appFeedbackData, projectData } from '../utils/Samples';

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
  InviteSection,
  MainContainer,
} from '../styles/pages/Home';

interface HomeProps {
  highlights: {
    projects: [ProjectData, ProjectData, ProjectData];
    feedbacks: [AppFeedbackData, AppFeedbackData, AppFeedbackData];
  };
}

const Home: React.FC<HomeProps> = ({ highlights }) => {
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
            <ProjectCard project={highlights.projects[0]} />
            <ProjectCard project={highlights.projects[1]} />
            <ProjectCard project={highlights.projects[2]} />
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

        <InviteSection>
          <div>
            <div>
              <strong>Você também pode ajudar a desenvolver o Hubify.</strong>
              <p>
                O Hubify é um projeto de open-source, então você pode nos ajudar
                a melhorar a plataforma, seja com ideias, correções e até novas
                features!
              </p>
            </div>

            <div>
              <a
                href="https://github.com/miguel5g/hubify-web/"
                target="__blank"
                rel="noopener noreferrer"
                arial-label="Hubify Github"
              >
                <FiGithub />
                Repositório Github
              </a>
            </div>
          </div>
        </InviteSection>

        <FeedbackSection>
          <h2>Feedbacks</h2>

          <div>
            <Feedback feedback={highlights.feedbacks[0]} />
            <Feedback feedback={highlights.feedbacks[1]} />
            <Feedback feedback={highlights.feedbacks[2]} />
          </div>
        </FeedbackSection>
      </MainContainer>

      <Footer />
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      highlights: {
        projects: [projectData, projectData, projectData],
        feedbacks: [appFeedbackData, appFeedbackData, appFeedbackData],
      },
    },
  };
};

export default Home;
