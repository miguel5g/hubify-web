import styled from 'styled-components';
import { transparentize } from 'polished';
import { motion } from 'framer-motion';

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
  display: flex;
  align-items: center;
  flex: 1;
  gap: 64px;

  max-width: 1000px;

  .logo-wrapper {
    position: relative;

    height: 25px;
    width: 150px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: auto;

    background: none;
    border: none;

    svg {
      ${({ theme }) => theme.typography.headlineLight};
    }
  }

  @media (min-width: 840px) {
    > button {
      display: none;
    }

    > div:not(.logo-wrapper) {
      display: flex;
      align-items: center;
      flex: 1;

      nav {
        display: flex;
        gap: 16px;
      }

      nav a {
        padding: 4px 8px;
        ${({ theme }) => theme.typography.bodyLight}
      }

      .user-info {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        margin-left: auto;
        padding: 2px;

        border: 1px solid ${({ theme }) => theme.colors.primary300};
        border-radius: 22px;
      }

      .user-info span {
        margin: 0 8px;
        ${({ theme }) => theme.typography.bodyLight};
      }

      .user-info img {
        border-radius: 50%;
      }

      .auth {
        display: flex;
        gap: 8px;

        margin-left: auto;
      }
    }
  }
`;

export const ContentWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  opacity: 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: 100%;
    padding-top: 16px;

    background: ${({ theme }) => theme.colors.primary100};

    overflow: hidden;
    opacity: 0;

    .logo-wrapper {
      margin: 0 16px;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 8px;

      margin: 0 16px;
    }

    nav a {
      padding: 4px 16px;

      border: 1px solid ${({ theme }) => theme.colors.primary300};
      border-radius: 4px;

      ${({ theme }) => theme.typography.bodyLight};
    }

    .auth {
      display: flex;
      flex-direction: column;
      gap: 4px;

      margin: 16px;
      margin-top: 0;
    }

    .user-info {
      display: flex;
      align-items: center;

      margin: 0 16px;
      padding: 2px;

      border: 1px solid ${({ theme }) => theme.colors.primary300};
      border-radius: 4px;

      img {
        border-radius: 4px;
      }

      span {
        margin-left: 8px;
        ${({ theme }) => theme.typography.titleLight};
      }
    }
  }

  .separator {
    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.primary300};
  }
`;
