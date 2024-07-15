import { router } from '@app/router';
import { useAppStore } from '@app/store/app-store';
import { getDesignTokens } from '@app/theme';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ReactElement, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';

const AppComponent = (): ReactElement => {
  const { colorMode } = useAppStore();

  const theme = useMemo(() => createTheme(getDesignTokens(colorMode)), [colorMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export const App = observer(AppComponent);
