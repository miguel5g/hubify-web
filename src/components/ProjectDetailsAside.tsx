import React from 'react';
import { toast } from 'react-hot-toast';
import {
  FiAlertCircle,
  FiExternalLink,
  FiEye,
  FiGitBranch,
  FiInfo,
  FiMessageSquare,
  FiStar,
  FiSun,
  FiZap,
} from 'react-icons/fi';

import { ProjectDetailsAsideContainer } from '../styles/components/ProjectDetailsAside';

interface ProjectDetailsAsideProps {
  project: {
    id: string;
    title: string;
    description: string;
    author: string;
    categories: string[];
    stars: number;
    feedbacks: number;
    impulses: number;
  };
}

export const ProjectDetailsAside: React.FC<ProjectDetailsAsideProps> = ({
  project,
}) => {
  function underBuilding() {
    toast('Infelizmente isso ainda não funciona...', {
      icon: '🙁',
    });
  }

  return (
    <ProjectDetailsAsideContainer>
      <div>
        <div>
          <span>Título</span>
          <strong>{project.title}</strong>
        </div>
        <div>
          <span>Descrição</span>
          <strong>{project.description}</strong>
        </div>
        <div>
          <span>Autor</span>
          <strong>{project.author}</strong>
        </div>
        <div>
          <span>Categorias</span>
          <strong>{project.categories.join(', ')}</strong>
        </div>

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
      </div>

      <div>
        <strong>Links</strong>
        <a>
          <FiEye />
          Demo
          <FiExternalLink />
        </a>
        <a>
          <FiGitBranch />
          Repositório
          <FiExternalLink />
        </a>
        <a>
          <FiInfo />
          Issues
          <FiExternalLink />
        </a>
      </div>

      <div>
        <strong>Ações</strong>

        <span>Dar uma estrela para o projeto.</span>
        <button onClick={underBuilding}>
          <FiStar />
          Estrela
        </button>

        <span>Impulsionar este projeto.</span>
        <button onClick={underBuilding}>
          <FiZap />
          Impulso
        </button>

        <span>Deixe um feedback sobre o projeto.</span>
        <button onClick={underBuilding}>
          <FiMessageSquare />
          Comentário
        </button>

        <span>Sugerir algo para ser implementado.</span>
        <button onClick={underBuilding}>
          <FiSun />
          Sugestão
        </button>

        <span>Quer reportar um bug? Clique aqui.</span>
        <button onClick={underBuilding}>
          <FiAlertCircle />
          Problemas
        </button>
      </div>
    </ProjectDetailsAsideContainer>
  );
};
