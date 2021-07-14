import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Button } from '../components/Button';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';

import {
  MainContainer,
  ProjectsContainer,
  ResultSection,
  SearchSection,
} from '../styles/pages/Projects';

const Projects: React.FC = () => {
  const projectSample = {
    id: 'sample',
    title: 'Social Network',
    description: 'Um simples projeto para desenvolver abilidaes',
    stars: 113,
    comments: 9,
    impulses: 38,
  };

  return (
    <ProjectsContainer>
      <MainContainer>
        <Header />

        <SearchSection>
          <h2>Explore todos os projetos</h2>

          <label>
            <FiSearch />
            <input type="text" />
          </label>
        </SearchSection>

        <ResultSection>
          <ul>
            {Array.from({ length: 18 }).map((_, i) => (
              <li key={i}>
                <ProjectCard project={projectSample} />
              </li>
            ))}
          </ul>

          <Button>Carregar mais...</Button>
        </ResultSection>
      </MainContainer>

      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;
