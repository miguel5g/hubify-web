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
