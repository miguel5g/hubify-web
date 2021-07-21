import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  padding: 32px;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 384px;
    padding: 32px;

    background: ${({ theme }) => theme.colors.primary100};
    border-radius: 4px;
    ${({ theme }) => theme.elevations.elevation3};

    h1 {
      margin: 0 auto 24px;

      color: ${({ theme }) => theme.colors.blueDark};
      ${({ theme }) => theme.typography.displayHeavy};
    }

    div:not(.button-group) {
      display: flex;
      flex-direction: column;

      width: 100%;
      margin-bottom: 8px;

      label {
        display: flex;
        align-items: center;

        margin-bottom: 2px;

        ${({ theme }) => theme.typography.subheaderLight};

        svg {
          margin-right: 2px;
        }
      }

      input {
        padding: 4px;

        background: none;
        border: 1px solid ${({ theme }) => theme.colors.primary400};
        border-radius: 4px;

        ${({ theme }) => theme.typography.subheaderLight};
      }
    }

    .button-group {
      display: flex;
      gap: 8px;

      margin: 16px auto 8px;
    }

    span {
      ${({ theme }) => theme.typography.bodyLight};

      a {
        text-decoration: underline;
      }
    }
  }
`;
