import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import {
  projectData,
  appFeedbackData,
  changelogData,
} from '../../../utils/Samples';
import { useProject } from '../../../hooks/useProject';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Anchor } from '../../../components/Anchor';
import { HomeContent } from '../../../components/HomeContent';
import { NotFoundContent } from '../../../components/NotFoundContent';
import { FeedbacksContent } from '../../../components/FeedbacksContent';
import { ChangelogContent } from '../../../components/ChangelogContent';

import {
  ContentSection,
  HeaderSection,
  MainContainer,
  ProjectDetailsContainer,
} from '../../../styles/pages/ProjectDetails';
import { useAuth } from '../../../hooks/useAuth';

interface ProjectDetailsProps {
  initialData: ExtendedProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  initialData: initialData,
}) => {
  const [tab, setTab] = useState<string>('home');

  const router = useRouter();
  const { project, setProject } = useProject();
  const { isAuth, user } = useAuth();

  useEffect(() => {
    const { tab } = router.query;

    if (['string', 'undefined'].indexOf(typeof tab) === -1) setTab('not_found');
    else if (tab) setTab(tab.toString());
    else setTab('home');
  }, [router]);

  useEffect(() => {
    setProject(initialData);
  }, [initialData, setProject]);

  if (!project)
    return (
      <div>
        <strong>Loading</strong>
      </div>
    );

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
                href={`/project/${project.id}`}
              >
                Apresenta????o
              </Anchor>
              <Anchor
                className={tab === 'feedbacks' ? 'active' : null}
                href={`/project/${project.id}/feedbacks`}
              >
                Coment??rios
              </Anchor>
              <Anchor
                className={tab === 'changelog' ? 'active' : null}
                href={`/project/${project.id}/changelog`}
              >
                Altera????es
              </Anchor>

              {isAuth && user.id === project.author_id && (
                <>
                  <Anchor
                    className={tab === 'issues' ? 'active' : null}
                    href={`/project/${project.id}/issues`}
                  >
                    Problemas
                  </Anchor>
                  <Anchor
                    className={tab === 'suggestions' ? 'active' : null}
                    href={`/project/${project.id}/suggestions`}
                  >
                    Sugest??es
                  </Anchor>
                  <Anchor
                    className={tab === 'settings' ? 'active' : null}
                    href={`/project/${project.id}/settings`}
                  >
                    Configura????es
                  </Anchor>
                </>
              )}
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

              case 'changelog':
                return <ChangelogContent />;

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

export const getStaticProps: GetStaticProps<ProjectDetailsProps> = async (
  context
) => {
  const validTabs = [
    'home',
    'feedbacks',
    'changelog',
    'issues',
    'suggestions',
    'settings',
  ];

  const { id, tab } = context.params;

  if (validTabs.indexOf((tab || 'home').toString()) === -1) {
    return {
      notFound: true,
    };
  }

  const feedbackData = appFeedbackData as FeedbackData;

  return {
    props: {
      initialData: {
        ...projectData,
        comments: [feedbackData, feedbackData],
        changelogs: [changelogData, changelogData],
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default ProjectDetails;
