import React, { useState } from 'react';
import Head from 'next/head';
import { toast } from 'react-hot-toast';
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
import { useEffect } from 'react';

const Projects: React.FC = () => {
  const [search, setSearch] = useState('');
  let searchTimeout: NodeJS.Timeout;
  const projectSample = {
    id: 'sample',
    title: 'Social Network',
    description: 'Um simples projeto para desenvolver abilidaes',
    stars: 113,
    feedbacks: 9,
    impulses: 38,
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  function handleLoadMore() {
    toast('Infelizmente isso ainda não funciona...', {
      icon: '🙁',
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (searchTimeout) clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setSearch(e.target.value);
    }, 1000);
  }

  return (
    <ProjectsContainer>
      <Head>
        <title>Eplorar projetos - Hubify</title>
      </Head>

      <MainContainer>
        <Header />

        <SearchSection>
          <h2>Explore todos os projetos</h2>

          <label>
            <FiSearch />
            <input
              type="text"
              placeholder="Digite algo para pesquisar..."
              onChange={handleInputChange}
            />
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

          <Button onClick={handleLoadMore}>Carregar mais...</Button>
        </ResultSection>
      </MainContainer>

      <Footer />
    </ProjectsContainer>
  );
};

export default Projects;
