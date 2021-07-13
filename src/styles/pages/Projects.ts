import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1000px;
  margin: 0 auto;
  padding: 0 32px 64px;

  h2 {
    margin-bottom: 16px;
    ${({ theme }) => theme.typography.headlineHeavy};
  }
`;

export const SearchSection = styled(Section)`
  align-items: center;

  padding-top: 64px;

  label {
    display: flex;
    align-items: center;

    padding: 8px;

    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary400};
    border-radius: 4px;

    ${({ theme }) => theme.typography.titleLight};

    svg {
      margin-right: 8px;
    }

    input {
      background: none;
      border: none;

      ${({ theme }) => theme.typography.titleLight};

      outline: none;
    }
  }
`;

export const ResultSection = styled(Section)`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;

    margin-bottom: 32px;

    li {
      display: flex;

      list-style: none;
    }
  }

  button {
    margin: 0 auto;
  }

  @media (min-width: 840px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
