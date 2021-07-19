import React from 'react';
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
import { Button } from './Button';

export const ProjectDetailsAside: React.FC = () => {
  return (
    <ProjectDetailsAsideContainer>
      <div>
        <div>
          <span>Título</span>
          <strong>Z</strong>
        </div>
        <div>
          <span>Descrição</span>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            dolore laboriosam illo maiores dignissimos ducimus? Nesciunt ipsam,
            impedit enim modi ullam consequuntur aliquid commodi quis illo error
            a amet molestiae!
          </strong>
        </div>
        <div>
          <span>Autor</span>
          <strong>Miguel Ângelo</strong>
        </div>
        <div>
          <span>Categorias</span>
          <strong>Z</strong>
        </div>

        <div className="stats">
          <span>
            <FiStar />
            {113}
          </span>
          <span>
            <FiMessageSquare />
            {38}
          </span>
          <span>
            <FiZap />
            {9}
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
        <button>
          <FiStar />
          Estrela
        </button>

        <span>Impulsionar este projeto.</span>
        <button>
          <FiZap />
          Impulso
        </button>

        <span>Deixe um feedback sobre o projeto.</span>
        <button>
          <FiMessageSquare />
          Comentário
        </button>

        <span>Sugerir algo para ser implementado.</span>
        <button>
          <FiSun />
          Sugestão
        </button>

        <span>Quer reportar um bug? Clique aqui.</span>
        <button>
          <FiAlertCircle />
          Problemas
        </button>
      </div>
    </ProjectDetailsAsideContainer>
  );
};
