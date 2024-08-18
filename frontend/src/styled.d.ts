import 'styled-components';

import { IThemeColors } from '@shared/interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors;
    gradients: {
      brand: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    animation: {
      easing: string;
      duration: string;
      defaultSettings: string;
    };
    font: {
      size: {
        caption: string;
        label: string;
        menu: string;
        body: string;
      };
      family: {
        base: string;
      };
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    },
    shadows: string[],
    zIndex: {
      header: string;
      dropdown: string;
    };
    transition: (prop: string, duration?: string, easing?: string) => string;
    radius: (value: number) => string;
    spacing: (value: number, valueY?: number, valueBottom?: number, valueLeft?: number) => string;
  }
}
