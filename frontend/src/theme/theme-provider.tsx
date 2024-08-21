import { createTheme, MantineProvider } from '@mantine/core';
import { PropsWithChildren, ReactElement } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren): ReactElement => {

  const theme = createTheme({
    fontFamily: 'Inter, Montserrat, sans-serif',
  });

  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
};
