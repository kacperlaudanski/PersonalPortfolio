import React from 'react';
import { Navigate } from 'react-router';

import { Path } from '../../../../enums';

import { PrivateRouteProps } from './privateRoute.types';

export const PrivateRoute: React.FC<PrivateRouteProps> = (props: PrivateRouteProps): JSX.Element => {
  const { children, user }: PrivateRouteProps = props;

  if (!user) {
    return <Navigate replace to={Path.Login} />;
  };

  return children;
};
