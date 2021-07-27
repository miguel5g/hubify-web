import styled from 'styled-components';

export const FeedbacksContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 32px;

  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    button,
    span {
      display: flex;
      align-items: center;
      justify-content: center;

      height: calc(1.25rem + 8px);
      padding: 4px 8px;

      background: ${({ theme }) => theme.colors.primary100};
      border: 1px solid ${({ theme }) => theme.colors.primary400};

      ${({ theme }) => theme.typography.bodyLight}
    }

    button {
      border-radius: 4px 0 0 4px;

      &:last-child {
        border-radius: 0 4px 4px 0;
      }
    }

    span {
      border-left: none;
      border-right: none;
    }
  }
`;

export const FeedbacksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style: none;

  li {
    padding: 16px;

    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary300};
    border-radius: 4px;

    header {
      display: flex;
      align-items: center;

      margin-bottom: 8px;

      img {
        border-radius: 50%;

        object-fit: cover;
      }

      div:nth-child(2) {
        display: flex;
        flex-direction: column;

        margin-left: 8px;
      }

      strong {
        ${({ theme }) => theme.typography.bodyHeavy}
      }

      span {
        color: ${({ theme }) => theme.colors.primary800};
        ${({ theme }) => theme.typography.bodyLight}
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: auto;
        padding: 4px;

        border: none;
        background: none;

        ${({ theme }) => theme.typography.titleLight}
      }
    }

    p {
      color: ${({ theme }) => theme.colors.primary800};
      ${({ theme }) => theme.typography.bodyLight}
    }
  }
`;
