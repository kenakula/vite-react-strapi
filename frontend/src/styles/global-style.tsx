import { HEADER_HEIGHT } from '@shared/constants';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    color: ${({ theme }): string => theme.colors.text};
    font-family: ${({ theme }): string => theme.font.family.base};
    font-size: ${({ theme }): string => theme.font.size.body};
    background-color: ${({ theme }): string => theme.colors.background};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex;

    & > div:not([data-dropdown]) {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100dvh;
    }
  }

  main {
    flex-grow: 1;
    
    padding-top: ${HEADER_HEIGHT}px;
    overflow-y: auto;

    scrollbar-color: oklch(36% 0 0) oklch(96.46% 0.010 273.36);
    -ms-overflow-style: auto;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: oklch(36% 0 0);
    }

    &::-webkit-scrollbar-track {
      background: oklch(96.46% 0.010 273.36);
    }
  }

  svg {
    fill: currentColor;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/inter.woff2") format("woff2-variations");
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: normal;
  }

  @font-face {
    font-family: "Inter Italic";
    src: url("/fonts/inter-italic.woff2") format("woff2-variations");
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: italic;
  }
`;
