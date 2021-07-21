import { css, DefaultTheme } from 'styled-components';

const elevation1 = css`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
`;

const elevation2 = css`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
`;

const elevation3 = css`
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
`;

const elevation4 = css`
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
`;

export default {
  elevation1,
  elevation2,
  elevation3,
  elevation4,
} as DefaultTheme['elevations'];
