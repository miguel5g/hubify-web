import styled from 'styled-components';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.primary100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary300};
`;

export const NavLink = styled(Link)``;
