import React from 'react';
import Link from 'next/link';
import { FiMessageSquare, FiStar, FiZap } from 'react-icons/fi';

import { LinkButton } from './LinkButton';

import { ProjectCardContainer } from '../styles/components/ProjectCard';

interface ProjectProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectCardContainer>
      <strong>{project.title}</strong>
      <span>{project.description}</span>

      <div className="stats">
        <span>
          <FiStar />
          {project.stars}
        </span>
        <span>
          <FiMessageSquare />
          {project.feedbacks}
        </span>
        <span>
          <FiZap />
          {project.impulses}
        </span>
      </div>

      <Link href={`/project/${project.id}`} passHref>
        <LinkButton>Visualizar</LinkButton>
      </Link>
    </ProjectCardContainer>
  );
};
