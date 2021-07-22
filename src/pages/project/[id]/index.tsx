import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { projectData } from '../../../utils/Samples';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Anchor } from '../../../components/Anchor';
import { HomeContent } from '../../../components/HomeContent';
import { NotFoundContent } from '../../../components/NotFoundContent';
import { FeedbacksContent } from '../../../components/FeedbacksContent';

import {
  ContentSection,
  HeaderSection,
  MainContainer,
  ProjectDetailsContainer,
} from '../../../styles/pages/ProjectDetails';

interface ProjectDetailsProps {
  project: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [tab, setTab] = useState<string>('home');

  const router = useRouter();

  /* Definir a tab que será exibida */
  useEffect(() => {
    const { tab } = router.query;
    const validTabs = [
      'home',
      'feedbacks',
      'changelog',
      'issues',
      'suggestions',
      'settings',
      'not_found',
    ];

    if (typeof tab === 'object') return setTab('not_found');

    if (tab && validTabs.indexOf(tab) === -1) setTab('not_found');
    else if (tab) setTab(tab);
    else setTab('home');
  }, [router]);

  return (
    <ProjectDetailsContainer>
      <Head>
        <title>{project.title} - Hubify</title>
      </Head>

      <MainContainer>
        <Header />

        <HeaderSection>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div>
            <nav>
              <Anchor
                className={tab === 'home' ? 'active' : null}
                href="/project/1"
              >
                Apresentação
              </Anchor>
              <Anchor
                className={tab === 'feedbacks' ? 'active' : null}
                href="/project/1/feedbacks"
              >
                Comentáros
              </Anchor>
              <Anchor
                className={tab === 'changelog' ? 'active' : null}
                href="/project/1/changelog"
              >
                Alterações
              </Anchor>
              <Anchor
                className={tab === 'issues' ? 'active' : null}
                href="/project/1/issues"
              >
                Problemas
              </Anchor>
              <Anchor
                className={tab === 'suggestions' ? 'active' : null}
                href="/project/1/suggestions"
              >
                Sugestões
              </Anchor>
              <Anchor
                className={tab === 'settings' ? 'active' : null}
                href="/project/1/settings"
              >
                Configurações
              </Anchor>
            </nav>
          </div>
        </HeaderSection>

        <ContentSection>
          {(() => {
            switch (tab) {
              case 'home':
                return <HomeContent />;

              case 'feedbacks':
                return <FeedbacksContent />;

              default:
                return <NotFoundContent />;
            }
          })()}
        </ContentSection>
      </MainContainer>

      <Footer />
    </ProjectDetailsContainer>
  );
};

export const getStaticProps: GetStaticProps<ProjectDetailsProps> = async () => {
  return {
    props: {
      project: projectData,
    },
  };
};

export default ProjectDetails;
