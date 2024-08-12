import { HTMLProps, PropsWithChildren, ReactElement } from 'react';

import { AppContainer } from './styles';

type TContainerProps = PropsWithChildren & HTMLProps<HTMLDivElement>;

export const Container = ({ children, ...props }: TContainerProps): ReactElement => (
  <AppContainer data-testid="container" {...props}>
    {children}
  </AppContainer>
);
