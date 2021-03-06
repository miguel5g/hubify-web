import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  strong {
    margin-bottom: 16px;

    ${({ theme }) => theme.typography.titleHeavy};
  }

  p {
    margin-bottom: 16px;
    ${({ theme }) => theme.typography.bodyLight};
  }
  img {
    border-radius: 50%;

    object-fit: cover;
  }

  span {
    margin-top: 8px;

    ${({ theme }) => theme.typography.bodyLight};
    font-style: italic;
  }
`;
