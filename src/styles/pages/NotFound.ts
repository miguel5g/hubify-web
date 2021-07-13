import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding: 64px;

  text-align: center;

  div {
    width: 72vw;
    margin-bottom: 32px;
  }

  strong {
    margin-bottom: 16px;

    ${({ theme }) => theme.typography.headlineHeavy}
  }

  span {
    margin-bottom: 32px;

    ${({ theme }) => theme.typography.bodyLight}
  }

  @media (min-width: 840px) {
    div {
      width: 32vw;
    }
  }
`;
