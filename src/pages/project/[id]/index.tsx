import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Anchor } from '../../../components/Anchor';
import { HomeContent } from './_lib/HomeContent';

import {
  ContentSection,
  HeaderSection,
  MainContainer,
  ProjectDetailsContainer,
} from '../../../styles/pages/ProjectDetails';

const ProjctDetails: React.FC = () => {
  const [tab, setTab] = useState<string>('home');

  const router = useRouter();

  const projectSample = {
    id: 'sample',
    title: 'Social Network',
    description: 'Um simples projeto para desenvolver abilidaes',
    stars: 113,
    feedbacks: 9,
    impulses: 38,
  };

  /* Definir a tab que será exibida */
  useEffect(() => {
    const { tab } = router.query;
    const validTabs = [
      'home',
      'messages',
      'feedbacks',
      'changelog',
      'issues',
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
      <MainContainer>
        <Header />

        <HeaderSection>
          <h1>{projectSample.title}</h1>
          <p>{projectSample.description}</p>

          <div>
            <nav>
              <Anchor
                className={tab === 'home' ? 'active' : null}
                href="/project/1"
              >
                Apresentação
              </Anchor>
              <Anchor
                className={tab === 'messages' ? 'active' : null}
                href="/project/1/messages"
              >
                Messagens
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
                className={tab === 'settings' ? 'active' : null}
                href="/project/1/settings"
              >
                Configurações
              </Anchor>
            </nav>
          </div>
        </HeaderSection>

        <ContentSection>
          <HomeContent />
        </ContentSection>
      </MainContainer>

      <Footer />
    </ProjectDetailsContainer>
  );
};

export default ProjctDetails;
