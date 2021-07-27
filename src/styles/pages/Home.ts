import styled from 'styled-components';

export const HomeContainer = styled.div`
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
`;

export const BannerSection = styled(Section)`
  padding-top: 64px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    h1 {
      color: ${({ theme }) => theme.colors.primary900};
      ${({ theme }) => theme.typography.displayHeavy};
    }

    span {
      margin-top: 16px;

      color: ${({ theme }) => theme.colors.primary600};
      ${({ theme }) => theme.typography.bodyLight};
    }

    div {
      display: flex;
      gap: 16px;

      margin: 32px 0;
    }
  }

  img {
    width: 64%;
  }

  @media (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    gap: 64px;

    & > div {
      align-items: flex-start;

      max-width: calc(50% - 32px);

      text-align: start;

      div {
        margin-bottom: 0;
      }
    }
  }
`;

export const HighlightSection = styled(Section)`
  align-items: center;

  h2 {
    margin-bottom: 16px;
    ${({ theme }) => theme.typography.headlineHeavy};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
  }

  @media (min-width: 840px) {
    & > div {
      flex-direction: row;
    }
  }
`;

export const DecideSection = styled(Section)`
  flex-direction: column-reverse;
  align-items: center;

  text-align: center;

  div:first-child {
    width: 100%;
    max-width: 436px;
  }

  div:last-child {
    display: flex;
    flex-direction: column;

    margin-bottom: 32px;

    strong {
      margin-bottom: 16px;

      ${({ theme }) => theme.typography.headlineHeavy};
    }

    p {
      color: ${({ theme }) => theme.colors.primary600};
      ${({ theme }) => theme.typography.bodyLight};
    }
  }

  @media (min-width: 840px) {
    flex-direction: row;
    align-items: center;
    gap: 64px;

    > div:last-child {
      align-items: flex-end;

      text-align: end;
    }

    > div {
      flex: 1;
    }
  }
`;

export const FeedbackSection = styled(Section)`
  align-items: center;

  h2 {
    margin-bottom: 16px;
    ${({ theme }) => theme.typography.headlineHeavy};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
  }

  @media (min-width: 840px) {
    & > div {
      flex-direction: row;
    }
  }
`;

export const InviteSection = styled(Section)`
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 32px;

    background: linear-gradient(201.16deg, #00c6ff -1%, #0072ff 86.14%);
    border-radius: 8px;
    ${({ theme }) => theme.elevations.elevation3}

    color: ${({ theme }) => theme.colors.primary100};
    text-align: center;

    > div:first-child {
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 8px;

        ${({ theme }) => theme.typography.titleHeavy};
      }

      p {
        color: ${({ theme }) => theme.colors.primary300};
        ${({ theme }) => theme.typography.bodyLight};
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        display: flex;
        align-items: center;

        padding: 8px 16px;

        border: 1px solid ${({ theme }) => theme.colors.primary300};
        border-radius: 4px;
        ${({ theme }) => theme.elevations.elevation4};

        ${({ theme }) => theme.typography.bodyHeavy};

        transition: border-color 0.15s;

        svg {
          margin-right: 4px;

          font-size: 1.1rem;
        }

        &:hover {
          border-color: ${({ theme }) => theme.colors.primary100};
        }
      }
    }
  }

  @media (min-width: 840px) {
    > div {
      flex-direction: row;

      text-align: start;

      > div:first-child {
        flex: 2;
      }

      > div:last-child {
        flex: 1;
      }
    }
  }
`;
