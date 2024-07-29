import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const Menu = (): ReactElement => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '10px' }}>
        <li>
          <Link to={'/'}>HOME</ Link>
        </li>
        <li>
          <Link to={'/profile'}>PROFILE</ Link>
        </li>
        <li>
          <Link to={'/auth/login'}>LOGIN</ Link>
        </li>
        <li>
          <Link to={'/auth/signup'}>SIGNUP</ Link>
        </li>
      </ul>
    </nav>
  );
};
