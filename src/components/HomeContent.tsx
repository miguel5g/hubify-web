import React from 'react';

import { ProjectDetailsAside } from './ProjectDetailsAside';

import { HomeContentContainer } from '../styles/components/HomeContent';

export const HomeContent: React.FC = () => {
  const projectSample = {
    id: '1',
    title: 'Social Network',
    author: 'Miguel Ângelo',
    description: 'Um simples prrojeto para desenvolver habilidades',
    categories: ['Social', 'Em desenvolvimento', 'open-source'],
    stars: 113,
    feedbacks: 9,
    impulses: 18,
  };

  return (
    <HomeContentContainer>
      <div></div>

      <div className="aside-wrapper">
        <ProjectDetailsAside project={projectSample} />
      </div>
    </HomeContentContainer>
  );
};
