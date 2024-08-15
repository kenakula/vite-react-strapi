import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      background: string;
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
    zIndex: {
      header: string;
    };
    transition: (prop: string, duration?: string, easing?: string) => string;
    radius: (value: number) => string;
    spacing: (value: number, valueY?: number, valueBottom?: number, valueLeft?: number) => string;
  }
}
