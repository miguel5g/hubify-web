import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
  padding: 16px 32px;

  background: ${({ theme }) => theme.colors.primary100};
  border-top: 1px solid ${({ theme }) => theme.colors.primary300};
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1000px;

  span {
    ${({ theme }) => theme.typography.bodyLight}
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      padding: 4px;
    }

    svg {
      ${({ theme }) => theme.typography.titleLight}
    }
  }
`;
