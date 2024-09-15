import { HOME_ROUTE } from '@shared/constants';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IHookValue {
  handleRedirect: () => void;
}

export const useRedirect = (): IHookValue => {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  const handleRedirect = useCallback(() => {
    if (locationState) {
      navigate(`${locationState.redirectTo.pathname}${locationState.redirectTo.search}`);

      return;
    }

    navigate(HOME_ROUTE);
  }, [locationState]);

  return {
    handleRedirect
  };
};
