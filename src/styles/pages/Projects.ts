import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
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
      width: 256px;

      background: none;
      border: none;

      ${({ theme }) => theme.typography.bodyLight};

      outline: none;
    }
  }
`;

export const ResultSection = styled(Section)`
  padding: 0 16px 64px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;

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
      grid-gap: 16px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  strong {
    margin-top: 8px;

    ${({ theme }) => theme.typography.titleHeavy}
  }

  p {
    ${({ theme }) => theme.typography.bodyLight}
  }

  .loading-container {
    position: relative;

    min-width: 147px;
    min-height: 192px;
  }

  .not-found-container {
    position: relative;

    min-width: 276px;
    min-height: 192px;
  }
`;
