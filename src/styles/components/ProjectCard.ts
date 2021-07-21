import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 16px;

  background: ${({ theme }) => theme.colors.primary100};
  border: 1px solid ${({ theme }) => theme.colors.primary300};
  border-radius: 8px;

  transition: box-shadow 0.15s;

  &:hover {
    ${({ theme }) => theme.elevations.elevation3};
  }

  strong {
    margin-bottom: 8px;

    ${({ theme }) => theme.typography.titleHeavy};
  }

  span {
    margin-bottom: 4px;

    ${({ theme }) => theme.typography.bodyLight};
  }

  div {
    display: flex;
    gap: 8px;

    margin-bottom: 16px;

    span {
      display: flex;
      align-items: center;

      margin-right: 8px;

      color: ${({ theme }) => theme.colors.primary600};
      ${({ theme }) => theme.typography.bodyLight};

      svg {
        margin-right: 2px;
      }
    }
  }

  button {
    width: 100%;
  }
`;
