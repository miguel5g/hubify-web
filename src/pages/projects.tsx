import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { toast } from 'react-hot-toast';
import { useList } from 'react-use';
import { FiSearch } from 'react-icons/fi';

import { projectData } from '../utils/Samples';

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

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = (props) => {
  const [search, setSearch] = useState('');
  const [projects, projectsMethods] = useList(props.projects);

  let searchTimeout: NodeJS.Timeout;

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
            {projects.map((data, i) => (
              <li key={i.toString()}>
                <ProjectCard project={data} />
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

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const projects = Array.from({ length: 18 }, () => projectData);

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
