import styled from 'styled-components';

export const ProjectDetailsAsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div {
    padding: 16px;

    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary300};
    border-radius: 8px;

    &:nth-child(1) {
      div:not(.stats) {
        display: flex;
        flex-direction: column;

        margin-bottom: 8px;

        span {
          ${({ theme }) => theme.typography.bodyHeavy};
        }

        strong {
          ${({ theme }) => theme.typography.bodyLight};
        }
      }

      div.stats {
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
    }

    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 4px;

      strong {
        margin-bottom: 4px;
        ${({ theme }) => theme.typography.subheaderLight};
      }

      a {
        display: flex;
        align-items: center;

        ${({ theme }) => theme.typography.bodyLight};

        svg:first-child {
          margin-right: 4px;
        }

        svg:last-child {
          margin-left: 4px;

          opacity: 0;

          transition: opacity 0.15s;
        }

        &:hover {
          svg:last-child {
            opacity: 1;
          }
        }
      }
    }

    &:nth-child(3) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        margin-bottom: 8px;

        ${({ theme }) => theme.typography.subheaderLight};
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 128px;
        margin-bottom: 12px;
        padding: 4px 8px;

        background: none;
        border: 1px solid ${({ theme }) => theme.colors.primary400};
        border-radius: 4px;

        ${({ theme }) => theme.typography.bodyLight};

        &:last-child {
          margin-bottom: 0;
        }

        svg {
          margin-right: 4px;
        }
      }

      span {
        margin-bottom: 2px;

        ${({ theme }) => theme.typography.bodyLight};
      }
    }
  }

  @media (min-width: 840px) {
    position: sticky;
    top: 71px;

    max-width: 300px;
  }
`;
