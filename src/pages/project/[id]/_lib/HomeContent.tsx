import React from 'react';

import { ProjectDetailsAside } from '../../../../components/ProjectDetailsAside';

import { HomeContentContainer } from '../../../../styles/pages/ProjectDetails/HomeContent';

export const HomeContent: React.FC = () => {
  const projectSample = {
    id: '1',
    title: 'Social Network',
    author: 'Miguel Ângelo',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quae nihil, error fuga ipsa, cupiditate unde ad saepe corporis laboriosam neque, iure alias! Ex quaerat, at eos molestiae ullam inventore?',
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
