import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { toast } from 'react-hot-toast';
import { useList } from 'react-use';
import { FiSearch } from 'react-icons/fi';

import { api } from '../services/Api';

import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';

import searchNotFoundSVG from '../assets/svg/search-not-found.svg';
import loadingSVG from '../assets/svg/loading.svg';

import {
  Info,
  MainContainer,
  ProjectsContainer,
  ResultSection,
  SearchSection,
} from '../styles/pages/Projects';

interface ProjectsProps {
  projects: {
    page: number;
    total_pages: number;
    total_projects: number;
    data: ProjectData[];
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [page, setPage] = useState(projects.page);
  const [totalPages, setTotalPages] = useState(projects.total_pages);
  const [search, setSearch] = useState('');
  const [data, dataMethods] = useList(projects.data);
  const [lastSearch, setLastSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  let searchTimeout: NodeJS.Timeout;

  useEffect(() => {
    if (search === lastSearch) return;
    else setLastSearch(search);

    setIsLoading(true);

    dataMethods.set([]);

    api
      .get('/projects', { params: { search } })
      .then(({ data }) => {
        dataMethods.set(data.projects);
        setPage(data.page);
        setTotalPages(data.total_pages);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Ocorreu algum erro ao tentar pesquisar.');
        setIsLoading(false);
      });
  }, [dataMethods, lastSearch, search]);

  function handleLoadMore() {
    setIsLoading(true);

    api
      .get('/projects', {
        params: { page: page + 1, search },
      })
      .then(({ data }) => {
        dataMethods.push(...data.projects);
        setPage(data.page);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error('Ocorreu algum erro ao tentar carregar mais resultados.');
        setIsLoading(false);
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
        <title>Explorar projetos - Hubify</title>
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
          {isLoading ? (
            <Info>
              <div className="loading-container">
                <Image src={loadingSVG} alt="Carregando dados" layout="fill" />
              </div>
              <strong>Carregando pesquisa...</strong>
              <p>Fato curioso: Eu não sei o que estou fazendo!</p>
            </Info>
          ) : (
            <>
              {data.length === 0 ? (
                <Info>
                  <div className="not-found-container">
                    <Image
                      src={searchNotFoundSVG}
                      alt="Carregando dados"
                      layout="fill"
                    />
                  </div>

                  <strong>Nenhum resultado foi encontrado. =/</strong>
                  <p>Tente pesquisar por outro termo</p>
                </Info>
              ) : (
                <>
                  <ul>
                    {data.map((data, i) => (
                      <li key={i.toString()}>
                        <ProjectCard project={data} />
                      </li>
                    ))}
                  </ul>

                  {page < totalPages && (
                    <Button onClick={handleLoadMore}>Carregar mais...</Button>
                  )}
                </>
              )}
            </>
          )}
        </ResultSection>
      </MainContainer>

      <Footer />
    </ProjectsContainer>
  );
};

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const { data } = await api.get('/projects');

  return {
    props: {
      projects: { ...data, data: data.projects },
    },
  };
};

export default Projects;
