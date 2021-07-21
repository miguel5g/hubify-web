import React from 'react';
import { FiMessageSquare, FiStar, FiZap } from 'react-icons/fi';

import { Button } from './Button';

import { ProjectCardContainer } from '../styles/components/ProjectCard';
import Link from 'next/link';
import { LinkButton } from './LinkButton';

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    stars: number;
    feedbacks: number;
    impulses: number;
  };
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
