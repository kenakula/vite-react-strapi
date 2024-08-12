import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  main {
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

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
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
