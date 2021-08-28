import styled from 'styled-components';
import { motion } from 'framer-motion';
import { transparentize } from 'polished';

export const Container = styled.header`
  position: sticky;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 64px;
  padding: 8px 16px;

  background: ${({ theme }) => transparentize(0.18, theme.colors.primary100)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
  backdrop-filter: saturate(180%) blur(5px);

  z-index: 50;
`;

export const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  & button {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 8px;

    background: none;
    border: none;

    font-size: 16px;
  }

  @media (min-width: 840px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.72);

  opacity: 0;
  pointer-events: none;

  transition: opacity 0.15s;

  &.opened {
    opacity: 1;
    pointer-events: inherit;
  }

  @media (min-width: 840px) {
    opacity: 0;

    transition: opacity 0s;
  }
`;

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 0;
  max-width: 96%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.primary100};

  overflow: hidden;

  .logo-container {
    min-width: max-content;
    height: 25px;
    margin: 16px;
  }

  @media (min-width: 840px) {
    position: relative;

    flex-direction: row;
    align-items: center;
    gap: 48px;

    width: 100% !important;
    max-width: 1000px;
    height: 100%;
    margin: 0 32px;

    background: none;

    .logo-container {
      margin: 0;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 150px;

  margin: 16px;

  ${({ theme }) => theme.typography.subheaderLight};

  a {
    padding: 8px 16px;

    border: 1px solid rgba(0, 0, 0, 0.04);
    border-radius: 4px;

    font-weight: 500;

    transition: color 0.1s, background 0.1s;
  }

  a:hover {
    background: rgba(0, 0, 0, 0.04);
    border-color: transparent;

    color: ${({ theme }) => theme.colors.blueDark};
  }

  @media (min-width: 840px) {
    flex-direction: row;

    a {
      padding: 4px 16px;

      border-color: transparent;
    }
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 150px;
  margin: 16px;

  @media (min-width: 840px) {
    flex-direction: row;

    width: max-content;
    margin-left: auto;
  }
`;
