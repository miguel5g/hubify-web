import { FlattenSimpleInterpolation } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;
      primary900: string;

      blueLight: string;
      blueDark: string;
    };

    typography: {
      displayHeavy: FlattenSimpleInterpolation;
      displayLight: FlattenSimpleInterpolation;

      headlineHeavy: FlattenSimpleInterpolation;
      headlineLight: FlattenSimpleInterpolation;

      titleHeavy: FlattenSimpleInterpolation;
      titleLight: FlattenSimpleInterpolation;

      subheaderHeavy: FlattenSimpleInterpolation;
      subheaderLight: FlattenSimpleInterpolation;

      bodyHeavy: FlattenSimpleInterpolation;
      bodyLight: FlattenSimpleInterpolation;
    };

    elevations: {
      elevation1: FlattenSimpleInterpolation;
      elevation2: FlattenSimpleInterpolation;
      elevation3: FlattenSimpleInterpolation;
      elevation4: FlattenSimpleInterpolation;
    };
  }
}
