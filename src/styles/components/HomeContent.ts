import styled from 'styled-components';

export const HomeContentContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  flex: 1;

  width: 100%;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 32px;

    height: max-content;
    padding: 16px;

    background: ${({ theme }) => theme.colors.primary100};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary300};
  }

  div.aside-wrapper {
    position: relative;
    height: 100%;
    background: transparent;
  }

  @media (min-width: 840px) {
    grid-template-columns: 1fr auto;
  }
`;
