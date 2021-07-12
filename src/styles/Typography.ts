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

const captionHeavy = css`
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const captionLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const smallHeavy = css`
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 0.875rem;
`;

const smallLight = css`
  font-style: normal;
  font-weight: normal;
  font-size: 0.625rem;
  line-height: 0.875rem;
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

  captionHeavy,
  captionLight,

  smallHeavy,
  smallLight,
} as DefaultTheme['typography'];
