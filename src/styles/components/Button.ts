import styled, { css } from 'styled-components';

interface ButtonProps {
  isPrimary?: boolean;
}

const PrimaryButton = css`
  background: ${({ theme }) => theme.colors.primary900};
  border-color: ${({ theme }) => theme.colors.primary900};

  color: ${({ theme }) => theme.colors.primary100};
`;

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  padding: 0.5rem 1.85rem;

  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary500};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.primary500};
  ${({ theme }) => theme.typography.bodyHeavy}

  ${({ isPrimary }) => (isPrimary ? PrimaryButton : null)};

  transition: color 0.15s, background-color 0.15s, border-color 0.15s;

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primary900};

    color: ${({ theme }) => theme.colors.primary900};
  }
`;
