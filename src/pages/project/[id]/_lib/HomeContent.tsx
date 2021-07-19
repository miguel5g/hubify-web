import React from 'react';

import { ProjectDetailsAside } from '../../../../components/ProjectDetailsAside';

import { HomeContentContainer } from '../../../../styles/pages/ProjectDetails/HomeContent';

export const HomeContent: React.FC = () => {
  return (
    <HomeContentContainer>
      <div></div>

      <div className="aside-wrapper">
        <ProjectDetailsAside />
      </div>
    </HomeContentContainer>
  );
};
