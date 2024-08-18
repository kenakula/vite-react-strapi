export interface IThemeColors {
  white: string;
  black: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
  backgroundHover: string;
}

export type TColor = keyof IThemeColors;
