import { css, DefaultTheme } from 'styled-components';

const displayHeavy = css`
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 3rem;
`;

const displayLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 3rem;
`;

const headlineHeavy = css`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const headlineLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const titleHeavy = css`
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const titleLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const subheaderHeavy = css`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const subheaderLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const bodyHeavy = css`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const bodyLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export default {
  displayHeavy,
  displayLight,

  headlineHeavy,
  headlineLight,

  titleHeavy,
  titleLight,

  subheaderHeavy,
  subheaderLight,

  bodyHeavy,
  bodyLight,
} as DefaultTheme['typography'];
