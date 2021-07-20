import styled from 'styled-components';

export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  strong {
    margin: 16px 0 4px;

    ${({ theme }) => theme.typography.headlineHeavy}
  }

  span {
    ${({ theme }) => theme.typography.bodyLight}
  }
`;

export const ImageWrapper = styled.div`
  width: 78%;
  max-width: 384px;
`;
