import { Menu } from '@components/menu';
import { ReactElement } from 'react';

interface IProps {
  showMenuToggle?: boolean;
}

export const Header = ({ showMenuToggle = true }: IProps): ReactElement => {
  return (
    <header>
      <div>
        {showMenuToggle && <button>menu</button>}
        <p>TR</p>
        <Menu/>
      </div>
    </header>
  );
};
