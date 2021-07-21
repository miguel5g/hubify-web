import styled from 'styled-components';
import { transparentize } from 'polished';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 32px;

  background: ${({ theme }) => transparentize(0.18, theme.colors.primary100)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
  backdrop-filter: saturate(180%) blur(5px);

  z-index: 50;
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

    a {
      padding: 4px 8px;
    }
  }

  &.opened {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > div {
      margin-top: 7.25px;
    }

    nav {
      display: flex;
    }
  }

  @media (min-width: 840px) {
    nav {
      display: flex;
      flex-direction: row;
      gap: 4px;

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

export const AuthActions = styled.div`
  display: none;
  gap: 8px;

  margin-top: 16px;

  &.opened {
    display: flex;
  }

  @media (min-width: 840px) {
    display: flex;

    margin-top: 0;
    margin-left: auto;
  }
`;
