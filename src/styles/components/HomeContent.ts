import styled from 'styled-components';

export const HomeContentContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  flex: 1;

  width: 100%;

  & > div:first-child {
    display: flex;
    flex-direction: column;

    height: max-content;

    background: ${({ theme }) => theme.colors.primary100};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary300};

    section {
      display: flex;
      flex-direction: column;

      margin: 16px;

      &:first-child {
        margin: 0;

        div {
          width: 100%;

          aspect-ratio: 16/9;

          background: ${({ theme }) => theme.colors.primary300};
        }
      }

      h2 {
        margin-bottom: 8px;

        ${({ theme }) => theme.typography.titleHeavy};
      }

      p {
        color: ${({ theme }) => theme.colors.primary800};
      }

      ul {
        margin-top: 8px;

        color: ${({ theme }) => theme.colors.primary800};

        list-style: inside;
      }
    }
  }

  div.aside-wrapper {
    position: relative;
    height: 100%;
    background: transparent;
  }

  @media (min-width: 840px) {
    grid-template-columns: 1fr auto;
  }
`;
