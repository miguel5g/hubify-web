import React from 'react';

import { Header } from '../components/Header';

import { HomeContainer, MainContainer } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <MainContainer>
        <Header />
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
