import styled from 'styled-components';

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const MainContainer = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1;

  .empty {
    flex: 1;
    background: ${({ theme }) => theme.colors.primary300};
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 0 0;
`;

export const HeaderSection = styled(Section)`
  width: 100%;

  text-align: center;

  h1 {
    margin: 0 32px;

    color: ${({ theme }) => theme.colors.primary900};
    ${({ theme }) => theme.typography.displayHeavy};
  }

  p {
    margin: 0 32px;
    margin-bottom: 32px;

    color: ${({ theme }) => theme.colors.primary600};
    ${({ theme }) => theme.typography.subheaderLight};
  }

  div {
    position: relative;
    nav {
      display: flex;
      gap: 0.5rem;

      padding: 0 32px;

      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      &::after,
      &::before {
        content: '';

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: 32px;

        background: linear-gradient(
          90deg,
          ${({ theme }) => theme.colors.primary200} 25%,
          transparent 100%
        );
      }

      &::after {
        left: inherit;
        right: 0;

        background: linear-gradient(
          90deg,
          transparent 0%,
          ${({ theme }) => theme.colors.primary200} 75%
        );
      }

      a {
        padding: 4px 8px;

        background: ${({ theme }) => theme.colors.primary100};
        border: 1px solid ${({ theme }) => theme.colors.primary300};
        border-radius: 1rem;

        ${({ theme }) => theme.typography.bodyLight};

        &.active {
          border-color: ${({ theme }) => theme.colors.primary900};
        }
      }
    }
  }

  @media (min-width: 600px) {
    nav {
      justify-content: center;
    }
  }
`;

export const ContentSection = styled(Section)`
  flex: 1;

  width: 100%;
  padding: 32px;
`;
