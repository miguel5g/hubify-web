import React from 'react';
import { FiMessageSquare, FiStar, FiZap } from 'react-icons/fi';

import { Button } from './Button';

import { ProjectCardContainer } from '../styles/components/ProjectCard';

interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    stars: number;
    comments: number;
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
          {project.comments}
        </span>
        <span>
          <FiZap />
          {project.impulses}
        </span>
      </div>

      <Button>Visualizar</Button>
    </ProjectCardContainer>
  );
};
