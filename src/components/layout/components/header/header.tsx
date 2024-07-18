import { Menu } from '@components/menu';
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';

interface IProps {
  showMenuToggle?: boolean;
}

export const Header = ({ showMenuToggle = true }: IProps): ReactElement => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="header" enableColorOnDark>
        <Toolbar>
          {showMenuToggle && <button onClick={handleDrawerToggle}>menu</button>}
          <Typography variant="h5">TR</Typography>
          <Menu />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          Drawer
        </Drawer>
      </nav>
      <Toolbar />
    </>
  );
};
