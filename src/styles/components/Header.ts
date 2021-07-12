import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 32px;

  background: ${({ theme }) => theme.colors.primary100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
`;

export const HeaderWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  max-width: 1000px;

  nav {
    display: none;
    flex-direction: column;
    gap: 8px;

    margin-top: 16px;
  }

  &.opened {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    nav {
      display: flex;
    }
  }

  @media (min-width: 840px) {
    nav {
      display: flex;
      flex-direction: row;
      gap: 16px;

      margin: 0;
      margin-left: 64px;
    }
  }
`;

export const NavLink = styled.a`
  ${({ theme }) => theme.typography.subheaderLight};
`;

export const MobileActions = styled.div`
  margin-left: auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;

    background: none;
    border: none;

    svg {
      ${({ theme }) => theme.typography.displayLight};
    }
  }

  button:nth-child(2) {
    display: none;
  }

  &.opened {
    margin: 0 auto;
    margin-top: 16px;

    button:nth-child(1) {
      display: none;
    }

    button:nth-child(2) {
      display: inherit;
    }
  }

  @media (min-width: 840px) {
    display: none;
  }
`;
