import styled from 'styled-components';

export const HomeContentContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  flex: 1;

  width: 100%;

  & > div {
    height: 200vh;
    /* background: ${({ theme }) => theme.colors.primary500}; */
    background: linear-gradient(
      180deg,
      #c4c4c4 0%,
      #ff0000 44.79%,
      #00ff66 97.92%
    );

    &.aside-wrapper {
      position: relative;
      height: 100%;
      background: transparent;
    }
  }

  @media (min-width: 840px) {
    grid-template-columns: 1fr auto;
  }
`;
