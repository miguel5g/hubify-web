import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.primary200};
    
    ${({ theme }) => theme.typography.bodyLight};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  :root {
    font-size: 87.5%;
  }

  @media (min-width: 840px) {
    :root {
      font-size: 100%;
    }
  }
  
  @media (min-width: 1280px) {
    :root {
      font-size: 112.5%;
    }
  }
`;
