import { PropsWithChildren, ReactElement, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const DEFAULT_SPACING_STEP = 8;
const DEFAULT_RADIUS_STEP = 4;

export const Theme = ({ children }: PropsWithChildren): ReactElement => {

  const theme: DefaultTheme = useMemo(() => ({
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: 'oklch(50.08% 0.162 265.74)',
      secondary: 'oklch(84% 0.09 268)',
      accent: 'oklch(64.04% 0.145 266.78)',
      text: 'oklch(16.59% 0.022 271.06)',
      background: 'oklch(96.46% 0.010 273.36)',
      backgroundHover: 'oklch(95.1% 0 252)',
    },
    gradients: {
      brand: 'linear-gradient(120deg, #375bbe, #b1c9ff)',
    },
    font: {
      size: {
        caption: '0.6rem',
        label: '0.8rem',
        menu: '0.9rem',
        body: '1rem',
      },
      family: {
        base: '\'Inter\', \'Helvetica\', sans-serif',
      }
    },
    borderRadius: {
      sm: '4px',
      md: '8px',
      lg: '16px',
    },
    breakpoints: {
      xs: '320px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
    animation: {
      easing: 'ease-in',
      duration: '0.2s',
      defaultSettings: '0.2s ease-in',
    },
    shadows: [
      '0 26px 58px 0 oklch(0% 0 252 / 0.22), 0 5px 14px 0 oklch(0% 0 252 / 0.18)'
    ],
    zIndex: {
      header: '100',
      dropdown: '500',
    },
    transition: (prop, duration, easing): string => {
      return `${prop} ${duration ? `${duration}s` : '0.2s'} ${easing ?? 'ease-in'}`;
    },
    radius: (value: number): string => `${DEFAULT_RADIUS_STEP * value}px`,
    spacing: spacingFunction,
  }), []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const spacingFunction = (value1: number, value2?: number, value3?: number, value4?: number): string => {
  return [value1, value2, value3, value4]
    .filter(value => !!value)
    .map(value => `${value! * DEFAULT_SPACING_STEP}px`)
    .join(' ');
};
